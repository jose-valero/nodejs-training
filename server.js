const express = require('express')
const app = express()
const server = require('http').Server(app)
 
const bodyParser = require('body-parser')
const socket = require('./socket');
const db = require('mongoose');
const router = require('./network/routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);
router(app)

app.use('/app', express.static('public'))

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
        server.listen(3000, function () {
            console.log('la aplicacion esta escuchando en http://localhost:3000')
        });

    }
    )
