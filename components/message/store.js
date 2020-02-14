const db = require('mongoose')

db.Promise = global.Promise
db.connect('mongodb+srv://db_valero:17410336@cluster0-gb6fa.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})

console.log('[la DB] conectada con exito')
   
function addMessage(message) {  
    const myMessage = new Model(message)
    myMessage.save()
}

function getMessage() {
    return list
}

module.exports = {
    add: addMessage,
    list: getMessage,
}