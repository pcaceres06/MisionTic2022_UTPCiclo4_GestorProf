const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller')

// Peticiones
//router.post('/create-user',userCtrl.crear)
router.post('/register',userCtrl.crear)
router.put('/update-user/:id',userCtrl.actualizar)
router.get('/', userCtrl.usuarios)
router.get('/:id', userCtrl.singleUser)
router.post('/login', userCtrl.login)

module.exports = router;