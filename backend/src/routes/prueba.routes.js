const {Router} = require('express')
const route = Router()
const pruebaCtrl = require('../controllers/prueba.controller')

//peticiones
route.get('/',pruebaCtrl.obtener)
route.post('/',pruebaCtrl.crear)
route.put('/',pruebaCtrl.actualizar)
route.delete('/',pruebaCtrl.eliminar)

module.exports=route