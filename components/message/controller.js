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
            .catch(e => {
                reject(e)
            })

        await resolve(response)
    })
}

function getMessages(fillterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(fillterUser)).catch(e => {
            reject(e)
        })
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