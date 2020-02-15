const db = require('mongoose')
const Message = require('./model');

db.Promise = global.Promise

console.log('[db] conectada exitosamente')
async function addMessage(message) {
    // message.
    const myMessage = new Message(message);
    const saveReponse = await myMessage.save(message);
    return saveReponse
}
async function getMessage() {

    const model = await Message.find()
    return model
}

async function updateText(id, message) {
    const foundMessage = await Model.findById({
        _id: id
    })

    foundMessage.message = message

    const newMessage = await foundMessage.save()
    return newMessage
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
}