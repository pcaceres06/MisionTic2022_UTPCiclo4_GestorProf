//Configuracion del server
const dotenv = require('dotenv')
dotenv.config()

// Base de datos
const {appConfig, dbConfig, dbCloud} = require('./config')
const connectDb = require('./database/db')

const express = require('express');
const app = express(); 

const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');


const passport = require('passport')
require('./database/passport')(passport)

// Middlewares
app.use(passport.initialize())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) // cada vez que llege un dato al servidor pasará por esta función y esta validará si está en formato json --> Alternativa a body-Parser

app.use(bodyparser.json());

// para codificar si viene en json o con el encabezado de x-www-form-urlencoded
app.use(
    bodyparser.urlencoded({
        extended:true
        //limit: '20mb' // colocar limite de 20MB por petición
    }));

// Rutas
//app.use('/api/',require('./routes/prueba.routes'))
app.use('/users/',require('./routes/user.route'))
app.use('/documents/',require('./routes/document.route'))
app.use('/public', express.static(`${__dirname}/../uploads/video`)) // ruta real
app.use('/public', express.static(`${__dirname}/../uploads/pdf`))
app.use('/public', express.static(`${__dirname}/../uploads/ppt`))

console.log(`Directorio actual ====> ${__dirname}`)

// Conexion a base de datos y inicializar servidor
async function initApp(appConfig, dbCloud){ // para utilizarlo de forma local
    try{
        // Conectar DB
        await connectDb(dbCloud)

        // iniciar servidor
        app.listen(appConfig.port, () => {
            console.log(`Listen on port ${appConfig.port}`)
        })

    }catch (e) {
        //Si hay error en la conexion de la db no se levanta el server
        console.error(e)
        process.exit(0)
    }
}

/*
async function initApp(appConfig, dbConfig){ // para utilizarlo de forma local
    try{
        // Conectar DB
        await connectDb(dbConfig)

        // iniciar servidor
        app.listen(appConfig.port, () => {
            console.log(`Listen on port ${appConfig.port}`)
        })

    }catch (e) {
        //Si hay error en la conexion de la db no se levanta el server
        console.error(e)
        process.exit(0)
    }
}
*/
initApp(appConfig, dbCloud)
