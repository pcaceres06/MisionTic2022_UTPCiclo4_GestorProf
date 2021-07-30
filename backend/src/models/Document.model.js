const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {appConfig} = require('../config') 

const documentSchema  = new Schema({
    titulo: {type: String, required:true},
    descripcion: {type: String, required:true},
    tipoDoc: {type: String, required: true},
    categoria: {type: String, required:true},
    autor: {type: String, required:true},
    url: {type: String, required:false}
},{
    collection:'document',
    versionKey: false,
    timestamps: true
})

// agregar métodos al modelo
documentSchema.methods.setUrl = function setUrl (filename) {
    const {host, port} = appConfig
    this.url = `${host}:${port}/public/${filename}` //ruta para el usuario
}

module.exports = mongoose.model('Document',documentSchema)