const express = require('express')
const app = express()
const server = require('http').Server(app)
 
const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket');
const db = require('mongoose');
const router = require('./network/routes')
const config = require('./config')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);
router(app)

app.use('/app', express.static('public'))
app.use(`/${config.publicRoute}`, express.static('public'))

const start = async () => {
    const connection = await db.connect(config.dbUrl, {
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
        server.listen(config.port, function () {
            // console.log('la aplicacion esta escuchando en http://localhost:3000')
            console.log(`la aplicacion esta escuchando en ${config.host}:${config.port}`)
        });

    }
    )
