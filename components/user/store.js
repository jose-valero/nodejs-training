const db = require('mongoose')
const Model = require('./model');

db.Promise = global.Promise

async function addUser(user) {
    const myUser = new Model(user);
    const saveReponse = await myUser.save(user);
    return saveReponse
}


async function getUsers(filterUser){
    let filter = {};
    if(filterUser != null) {
        filter = {name: filterUser}
    }
    const users = await Model.find(filter);
    return users;
}

module.exports = {
    add: addUser,
    list: getUsers,
};