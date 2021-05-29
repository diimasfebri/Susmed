const express = require('express')

const user = require('../model/roommodel')

const router = express.Router()


router.get('/find-room', async (req, res) => {
  try {
  const {
    query : { members }
  } = req
    const kok =     members.split(',')

    //INPUT DATA KE DATABASE
    const newAkun = new user({
      name, username, password, create_date: new Date()
    })
    await newAkun.save()
    return res.send({ message: 'SUCCESS', user: newAkun })
  } catch (e) {
    const { message } = e
    if (message === 'INVALID_REQUEST') res.status(404).send({ message })
    else res.status(500).send({ message })
  }
})

router.get('/', async (req, res)=>{
	try{
		const {
			query: { id }
		} = req
		console.log(req)
		let payload = null
		if (id) payload = await taskModel.findById(id).exec()
		else payload = await taskModel.find({}).exec()
		res.send(payload)
	}catch(e){
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
      message: 'SUCCESS', user: attendee._id, nama: attendee.name , avatar: attendee.avatar
    })

  } catch (e) {
    const { message } = e
    if (message === 'INVALID_REQUEST') res.status(404).send({ message })
    else res.status(500).send({ message })
  }
})
module.exports = router