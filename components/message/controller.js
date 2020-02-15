const store = require('./store')


function addMessage(user, message) {
    return new Promise(async (resolve, reject) => {
        if (!user || !message) {
            console.error('[MessageController] No hay Usuario o Mensaje')
            return reject('Los datos son incorrectos')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }

        const response = await store.add(fullMessage)

        await resolve(response)
    })
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(id)
        console.log(message)
        if (!id || !message) {
            reject('invalid data')
            return false
        }
        const result = await store.updateText(id, message)
        resolve(result)
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,

}