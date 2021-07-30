const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: {type: String, required:true},
    correo: {type: String, required:true},
    userName: {type: String, required:true},
    password: {type: String, required:true},
    esProfesor: {type: Boolean, required:true}
},{
    collection: 'user',
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)