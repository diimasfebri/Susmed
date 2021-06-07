const express = require('express')

const roommodel = require('../model/roommodel')

const router = express.Router()

router.get('/find-room', async (req, res) => {
  try {
    const {
      query: { members }
    } = req
    const membersArray = members.split(',')
    const username = members.username
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

module.exports = router