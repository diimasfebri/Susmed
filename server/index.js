'use strict'
const http = require('http')

const cors = require('cors')
const express = require('express')
const socketIO = require('socket.io')


// Create the express app
const app = express()

app
  .use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
  }))

  .use(express.json())
  .use(express.urlencoded({ extended: false }))

// Routes and middleware
// app.use(/* ... */)

// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})

const server = http.createServer(app)
const io = socketIO(server, {
  cors: {
    origin: ['http://localhost:3000']
  }
})

const nsp = io.of('/messages')

nsp.on('connection', (socket) => {
  let room = ''
  console.log('test')
  socket.on('message-sent', (payload) =>{
    const { roomId, message } = payload
    socket.in(roomId).emit ('new-messaage', message)
  })
  socket.on('join-room', (roomId) => {
    room = roomId
    socket.join(room)
  })
  socket.on('disconnect', () => {
    socket.leave(room)
    room = ''
  })  

})

// Start server
function start() {
  server.listen(8000)
  console.log('Started at http://localhost:8000')
}
start()
