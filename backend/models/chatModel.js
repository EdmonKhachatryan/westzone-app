import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    online: { type: Boolean },
    socketId: { type: String },
    userName: { type: String, required: true },
    unreadForAdmin: { type: Number, default: 0 },
    unreadForUser: { type: Number, default: 0 },
    lastMessageForAdmin: { type: Date },
    lastMessageForUser: { type: Date },
    messages: [
      {
        body: String,
        name: String,
        isAdmin: Boolean,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
