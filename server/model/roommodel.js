const { Schema, model } = require('mongoose')

const RoomSchema = Schema({
  member: {
    type: Array,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
})
module.exports = model('rooms', RoomSchema)