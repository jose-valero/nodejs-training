const mongoose = require('mongoose')

const Schema = mongoose.Sechema

const mySchema = new Schema({
  user: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
  },
  data: {
    type: Data
  },
})

const model = mongoose.model('Message', mySchema)
module.exports = model