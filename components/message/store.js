const db = require('mongoose')
const Model = require('./model');


db.Promise = global.Promise

console.log('[db] conectada exitosamente')
async function addMessage(message) {
    const myMessage = new Messege(message);
    const saveReponse = await myMessage.save(message);
    return saveReponse
}

async function getMessage(fillterUser) {
    return new Promise((resolve, reject) => {
        let fillter = {}
        if (fillterUser !== null) {
            fillter = {
                 user: fillterUser }
        }
       Model.find(fillter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error)
                     return false    
                }
                resolve(populated)
            })

    })

}

async function updateText(id, message) {
    const foundMessage = await Messege.findById(id)
        .catch(e => {
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