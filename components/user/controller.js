const store = require('./store')

function addUser(name) {
    if (!name) {
        return Promise.reject('invalid name')
    }

    const user = {
        name,
    }
    return store.add(user)
}

function getUsers(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
        .catch(e=>{
            reject(e)
        });
    })
}

module.exports = {
    addUser,
    getUsers,

}