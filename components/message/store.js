const db = require('mongoose')
const Messege = require('./model');


db.Promise = global.Promise

console.log('[db] conectada exitosamente')
async function addMessage(message) {
    const myMessage = new Messege(message);
    const saveReponse = await myMessage.save(message);
    return saveReponse
}

async function getMessage(fillterUser) {
    let fillter = {}
    if (fillterUser !== null) {
        fillter = {user: fillterUser}
    }
    const model = await Messege.find(fillter)
    return model
}

async function updateText(id, message) {
    const foundMessage = await Messege.findById(id)
    .catch(e=> {
        throw e
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

function removeMessege(id) {
    //return Messege.findByIdAndDelate(id)  Alternativa 
   return Messege.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessege,
}