const express = require('express')

const roommodel = require('../model/roommodel')

const router = express.Router()


router.get('/find-room', async (req, res) => {
  try {
    const {
      query: { members }
    } = req
    const membersArray = members.split(',')
    //mengecek apakah room sudah ada
    const room = (await roommodel.aggregate([ 
      {
        $match: {
          $expr: {
            $setIsSubset: ['$member', membersArray]
          }
        }
      }
    ]).exec())[0]
    if (room) {
      return res.send({ message: 'SUCCESS', room: room })
    } else {
      //membuat room
      const newRoom = new roommodel({
        member: membersArray, create_date: new Date()
      })
      await newRoom.save()
      return res.send({ message: 'SUCCESS', room: newRoom })
    }
  } catch (e) {
    const { message } = e
    if (message === 'INVALID_REQUEST') res.status(404).send({ message })
    else res.status(500).send({ message })
  }
})

router.get('/', async (req, res) => {
  try {
    const {
      query: { id }
    } = req
    console.log(req)
    let payload = null
    if (id) payload = await taskModel.findById(id).exec()
    else payload = await taskModel.find({}).exec()
    res.send(payload)
  } catch (e) {
    res.status(400).send(e.message)
  }
})


router.post('/signin', async (req, res) => {
  const {
    body: { username, password }
  } = req
  try {
    //CEK
    const attendee = await user.findOne({ username }).exec()
    if (!attendee)
      throw new Error('USER_NOT_FOUND')
    if (password !== attendee.password)
      throw new Error('PASSWORD_NOT_FOUND')
    // mengambil id dari mongodb nya langsung 
    return res.send({
      message: 'SUCCESS', user: attendee._id, nama: attendee.name, avatar: attendee.avatar
    })

  } catch (e) {
    const { message } = e
    if (message === 'INVALID_REQUEST') res.status(404).send({ message })
    else res.status(500).send({ message })
  }
})
module.exports = router