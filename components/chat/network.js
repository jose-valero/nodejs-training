const express = require('express')
const response = require('../../network/response')
const router = express.Router()
const controller = require('./controller')

router.post('/', function (req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'internal Error', 500, err)
        })
})

router.get('/:userId', function (req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200)
        })
        .catch(err => {
            response.error(req, res, 'unexpected chat error', 500, err)
        })
})

module.exports = router