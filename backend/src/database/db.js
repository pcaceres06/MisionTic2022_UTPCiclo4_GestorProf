const mongoose = require('mongoose');

// Base de datos
//URI = ('mongodb://localhost/gestorprof');

mongoose.connection.on('open', () => console.log("Base de datos conectada"))

async function conectDB({host,port,dbName}) {
    const URI = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
}

module.exports = conectDB

// Conexón
/*
mongoose.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(db=>console.log("Base de datos conectada"))
    .catch(error=>console.log(error))

// Exportar conexión para poder utilizar el archivo en el servidor
module.export = mongoose
*/
