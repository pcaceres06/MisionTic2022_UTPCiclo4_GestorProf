const express = require('express')

// Modelo usuario
const User = require('../models/User.model')

// Controlador
const userCtrl = {}

userCtrl.crear= async (req,res)=>{
    

    if (req.body.esProfesor === 'on'){
        let {nombre, correo, telefono, password, esProfesor} = req.body
        esProfesor = 1
        const user = new User({nombre, correo, telefono, password, esProfesor})
        await user.save()
        res.json({status:'Usuario registrado'})
        console.log(user)
        console.log(req.body)
    } else{
        const {nombre, correo, telefono, password, esProfesor} = req.body
        const user = new User({nombre, correo, telefono, password, esProfesor})
        await user.save()
        res.json({status:'Usuario registrado'})
        console.log(user)
        console.log(req.body)
    }
}

userCtrl.actualizar= async (req,res)=>{
    const {nombre, correo, telefono, password, esProfesor} = req.body
    const newUser = {nombre, correo, telefono, password, esProfesor}
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