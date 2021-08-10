const config = {
    appConfig: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT || process.env.PORT
    },
    dbConfig:{
        port:process.env.DB_PORT,
        host:process.env.DB_HOST,
        dbName:process.env.DB_NAME
    },
    dbCloud:{
        dbUser:process.env.DB_USER,
        dbPass:process.env.DB_PASS,
        dbName:process.env.DB_NAME,
        secretOrKey: process.env.SECRET_KEY
    }
}

module.exports = config