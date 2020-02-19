const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    user: [{
        type: Schema.ObjectId,
        Ref: 'User'
    }]

})

const model = mongoose.model('Chat', mySchema);
module.exports = model;