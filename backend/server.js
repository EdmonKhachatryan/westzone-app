import http from 'http';
import { Server } from 'socket.io';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import { generateUploadURL } from './s3.js';
import Chat from './models/chatModel.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/westzone');
app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/api/config/google', (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || '');
});
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

//app.get('/', (req, res) => {
//  res.send('Server is ready');
//});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

const httpServer = http.Server(app);
const io = new Server(httpServer, { cors: { origin: '*' } });
const users = [];

async function restoreChat() {
  const chats = await Chat.find();
  console.log('chats', chats);
  users.push(chats);
}
restoreChat();

io.on('connection', (socket) => {
  console.log('connection', socket.id);
  socket.on('disconnect', async () => {
    const user = users.find((x) => x.socketId === socket.id);
    if (user) {
      user.online = false;
      const chatUser = await Chat.findOne({ user: user._id });
      if (chatUser) {
        chatUser.online = false;
        await chatUser.save();
      }
      console.log('Offline', user.name);
      const admin = users.find((x) => x.isAdmin && x.online);
      if (admin) {
        io.to(admin.socketId).emit('updateUser', user);
      }
    }
  });
  socket.on('onLogin', async (user) => {
    const updatedUser = {
      ...user,
      online: true,
      socketId: socket.id,
      messages: [],
    };
    const existUser = users.find((x) => x._id === updatedUser._id);
    if (existUser) {
      existUser.socketId = socket.id;
      existUser.online = true;
      const chatUser = await Chat.find({ user: existUser._id });
      chatUser.socketId = socket.id;
      chatUser.online = true;
    } else {
      users.push(updatedUser);
      // add new user to the chat model
      const chat = new Chat({
        user: updatedUser._id,
        online: true,
        socketId: updatedUser.socketId,
        userName: updatedUser.name,
        messages: [],
      });
      const savedChat = await chat.save();
    }
    console.log('Online', user.name);
    const admin = users.find((x) => x.isAdmin && x.online);
    if (admin) {
      io.to(admin.socketId).emit('updateUser', updatedUser);
    }
    if (updatedUser.isAdmin) {
      io.to(updatedUser.socketId).emit('listUsers', users);
    }
  });

  socket.on('onUserSelected', (user) => {
    const admin = users.find((x) => x.isAdmin && x.online);
    if (admin) {
      const existUser = users.find((x) => x._id === user._id);
      io.to(admin.socketId).emit('selectUser', existUser);
    }
  });

  socket.on('onMessage', async (message) => {
    if (message.isAdmin) {
      const user = users.find((x) => x._id === message._id && x.online);
      if (user) {
        io.to(user.socketId).emit('message', message);
        user.messages.push(message);
        // add new message to the database
        const chatUser = await Chat.findOne({ user: user._id });
        if (chatUser) {
          chatUser.messages.push(message);
          chatUser.unreadForUser = chatUser.unreadForUser + 1;
          chatUser.lastMessageForUser = Date.now();
          await chatUser.save();
        }
      }
    } else {
      const admin = users.find((x) => x.isAdmin && x.online);
      if (admin) {
        io.to(admin.socketId).emit('message', message);
        const user = users.find((x) => x._id === message._id && x.online);
        user.messages.push(message);
        const chatUser = await Chat.findOne({ user: user._id });
        if (chatUser) {
          chatUser.messages.push(message);
          chatUser.unreadForAdmin = chatUser.unreadForAdmin + 1;
          chatUser.lastMessageForAdmin = Date.now();
          await chatUser.save();
        }
      } else {
        io.to(socket.id).emit('message', {
          name: 'Admin',
          body: 'Sorry. I am not online right now',
        });
      }
    }
  });
});

httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`Serve at http://localhost:${port}`);
// });
