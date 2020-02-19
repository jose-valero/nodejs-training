const store = require('./store')
const socket = require('../../socket').socket


function addMessage(chat, user, message, file) {
    return new Promise(async (resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[MessageController] No hay Usuario o Mensaje')
            return reject('Los datos son incorrectos')
        }

        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost:3000/app/files' + file.filename
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        }

        const response = await store.add(fullMessage)
            .catch(e => {
                reject(e)
            })

            socket.io.emit('message', fullMessage)

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