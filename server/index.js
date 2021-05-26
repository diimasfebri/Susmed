'use strict'
const http = require('http')

const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const socketIO = require('socket.io')


//inisialisasi router
const users = require ('./routes/users')

// Create the express app
const app = express()


//Panggil Database
mongoose.connect('mongodb://localhost:27017/susmed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).connection


//middleware
app
  .use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
  }))
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

// Routes and middleware
// app.use(/* ... */)

//panggil router  
app
.use('/users', users)


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

//"nsp" adalah gedung 
const nsp = io.of('/messages')

nsp.on('connection', (socket) => {
  let room = ''
  // socket.on merupakan  ruangannya dari gedung. socket sendiri adalah pelayannya
  socket.on('message-sent', (payload) =>{
    const { roomId, message } = payload
    socket.in(roomId).emit ('new-message', message)
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
