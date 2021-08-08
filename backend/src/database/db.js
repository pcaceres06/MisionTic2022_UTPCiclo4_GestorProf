const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log("Base de datos conectada"))

async function connectDbCloud({dbUser,dbPass,dbName}){
    const URI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.yhw0k.mongodb.net/${dbName}?retryWrites=true&w=majority`
    await mongoose.connect(URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
}

module.exports = connectDbCloud

/*
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
*/