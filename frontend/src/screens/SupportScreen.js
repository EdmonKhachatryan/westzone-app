import React, { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { useSelector } from 'react-redux'
import MessageBox from '../elements/MessageBox'
import './SupportScreen.css'

let allUsers = []
let allMessages = []
let allSelectedUser = {}
const ENDPOINT =
  window.location.host.indexOf('localhost') >= 0
    ? 'http://127.0.0.1:4000'
    : window.location.host

export default function SupportScreen() {
  const [selectedUser, setSelectedUser] = useState({})
  const [socket, setSocket] = useState(null)
  const uiMessagesRef = useRef(null)
  const [messageBody, setMessageBody] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  useEffect(() => {
    if (uiMessagesRef.current) {
      uiMessagesRef.current.scrollBy({
        top: uiMessagesRef.current.clientHeight,
        left: 0,
        behavior: 'smooth',
      })
    }

    if (!socket) {
      const sk = socketIOClient(ENDPOINT)
      setSocket(sk)
      sk.emit('onLogin', {
        user: userInfo._id,
        name: userInfo.name,
        isAdmin: userInfo.isAdmin,
      })
      sk.on('message', (data) => {
        if (allSelectedUser.user === data.user) {
          allMessages = [...allMessages, data]
        } else {
          const existUser = allUsers.find((user) => user.user === data.user)
          if (existUser) {
            allUsers = allUsers.map((user) =>
              user.user === existUser.user ? { ...user, unread: true } : user
            )
            setUsers(allUsers)
          }
        }
        setMessages(allMessages)
      })
      sk.on('updateUser', (updatedUser) => {
        const existUser = allUsers.find(
          (user) => user.user === updatedUser.user
        )
        if (existUser) {
          allUsers = allUsers.map((user) =>
            user.user === existUser.user ? updatedUser : user
          )
          setUsers(allUsers)
        } else {
          allUsers = [...allUsers, updatedUser]
          setUsers(allUsers)
        }
      })
      sk.on('listUsers', (updatedUsers) => {
        console.log('listUsers', updatedUsers)
        allUsers = updatedUsers
        setUsers(allUsers)
      })
      sk.on('selectUser', (user) => {
        allMessages = user.messages
        setMessages(allMessages)
      })
    }
  }, [messages, socket, users, userInfo])

  const selectUser = (user) => {
    allSelectedUser = user
    setSelectedUser(allSelectedUser)
    const existUser = allUsers.find((x) => x.user === user.user)
    if (existUser) {
      allUsers = allUsers.map((x) =>
        x.user === existUser.user ? { ...x, unread: false } : x
      )
      setUsers(allUsers)
    }
    socket.emit('onUserSelected', user)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!messageBody.trim()) {
      alert('Error. Please type message.')
    } else {
      allMessages = [...allMessages, { body: messageBody, name: userInfo.name }]
      setMessages(allMessages)
      setMessageBody('')
      setTimeout(() => {
        socket.emit('onMessage', {
          body: messageBody,
          name: userInfo.name,
          isAdmin: userInfo.isAdmin,
          user: selectedUser.user,
        })
      }, 1000)
    }
  }

  return (
    <div className="row top fullContainer">
      <div className="col-1 supportUsers">
        {users.filter((x) => x.user !== userInfo._id).length === 0 && (
          <MessageBox>No Online User Found</MessageBox>
        )}
        <ul>
          {users
            .filter((x) => x.user !== userInfo._id)
            .map((user) => (
              <li
                key={user.user}
                className={
                  user.user === selectedUser.user ? '  selected' : '  '
                }
              >
                <button
                  className="block"
                  type="button"
                  onClick={() => selectUser(user)}
                >
                  {user.name}
                </button>
                <span
                  className={
                    user.unread ? 'unread' : user.online ? 'online' : 'offline'
                  }
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="col-3 supportMessages">
        {!selectedUser.user ? (
          <MessageBox>Select a user to start chat</MessageBox>
        ) : (
          <div>
            <div className="row">
              <strong>Chat with {selectedUser.name} </strong>
            </div>
            <ul ref={uiMessagesRef}>
              {messages.length === 0 && <li>No message.</li>}
              {messages.map((msg, index) => (
                <li key={index}>
                  <strong>{`${msg.name}: `}</strong> {msg.body}
                </li>
              ))}
            </ul>
            <div>
              <form onSubmit={submitHandler} className="row">
                <input
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  type="text"
                  placeholder="type message"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
