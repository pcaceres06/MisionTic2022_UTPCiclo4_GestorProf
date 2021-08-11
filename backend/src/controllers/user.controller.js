const express = require('express')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {dbCloud} = require('../config')
// Validadores
const validateLoginInput = require('../validation/login')
const validateRegisterInput = require('../validation/register')

// Modelo usuario
const User = require('../models/User.model')

// Controlador
const userCtrl = {}

userCtrl.crear= async (req,res)=>{

    // Validacion formulario
    const {errors, isValid} = validateRegisterInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }
    
    const user = await User.findOne({correo: req.body.correo})
    if (user){
        return res.status(400).json({status:'El correo ya se encuentra registrado'})
    } else{
        const {nombre, correo, telefono, password} = req.body
        const newUser = new User({nombre, correo, telefono, password})
        
        // Encriptar contraseña
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, async (err,hash) => {
                if(err) throw err
                    newUser.password = hash
                    await newUser.save()
                    res.json({status:'Usuario registrado'})
                     console.log(newUser)
                    console.log(req.body)
                })
            })
        

    }
    
}

userCtrl.actualizar= async (req,res)=>{
    const {nombre, correo, telefono, password} = req.body
    const newUser = {nombre, correo, telefono, password}
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

userCtrl.login = async (req,res) => {
    const {errors, isValid} = validateLoginInput(req.body)

    if (!isValid){
        return res.status(400).json(errors)
    }else{
        const correo = req.body.correo
        const password = req.body.password

        // Validar usuario por correo
        const user = await User.findOne({correo})
        if (!user){
            res.json({status:"Correo no encontrado"})
        }

        //Validar contraseña
        const isMatch = await bcrypt.compare(password, user.password)
        
        // Create JWT Payload
        if (isMatch){
            const payload = {
                id: user.id,
                nombre: user.nombre
            }

            // Sign token
            jwt.sign(
                payload,
                dbCloud.secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token)=>{
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    })
                }
            )
        } else{
            res.json({status:'Contraseña incorrecta'})
        }

    }
}


module.exports = userCtrl