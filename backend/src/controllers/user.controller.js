const express = require('express')

// Modelo usuario
const User = require('../models/User.model')

// Controlador
const userCtrl = {}

userCtrl.crear= async (req,res)=>{
    const {nombre, correo, userName, esProfesor} = req.body
    const user = new User({nombre, correo, userName, password, esProfesor})
    await user.save()
    res.json({status:'Usuario registrado'})
    console.log(user)
}

userCtrl.actualizar= async (req,res)=>{
    const {nombre, correo, userName, password, esProfesor} = req.body
    const newUser = {nombre, correo, userName, password, esProfesor}
    await User.findByIdAndUpdate(req.params.id, newUser)
    res.json({status:'Usuario actualizado'})
}

userCtrl.usuarios = async (req,res)=>{
    const users = await User.find()
    res.json(users)
}

userCtrl.singleUser = async (req,res)=>{
    const user = await User.findById(req.params.id)
    res.json(user)
}


module.exports = userCtrl