const store = require('./store')


function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[MessageController] No hay Usuario o Mensaje')
             reject('Los datos son incorrectos')
             return false
        }
        const fullMessage = {
            chat: chat,
            user: user, 
            message: message,
            date: new Date(),
            
        }
        store.add(fullMessage)

        resolve(fullMessage)
    })
}

function getMessages(filterchat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterchat))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('invalid data')
            return false
        }
        const result = await store.updateText(id, message)
            .catch(e => {
                reject(e)
            })
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject('id invalido')
        }
        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,

}