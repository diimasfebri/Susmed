const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  //ini buat gambar
  avatar:{
    type: String,
    required : false
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
})
module.exports = model('Users', UserSchema)