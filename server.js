const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/routes')
const db = require('mongoose');
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/app', express.static('public'))
router(app)

const start = async () => {
    const connection = await db.connect('mongodb+srv://db_valero:17410336@cluster0-gb6fa.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .catch(e => {
            console.error('error connecting')
            reject(e)
        })
}
start()
    .then(() => {
        app.listen(3000);
        console.log('la aplicacion esta escuchando en http://localhost:3000')
    }
    )
