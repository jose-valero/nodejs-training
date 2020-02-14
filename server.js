const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/routes')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/app', express.static('public'))
router(app)

app.listen(3000)
console.log('la aplicacion esta escuchando en http://localhost:3000') 
