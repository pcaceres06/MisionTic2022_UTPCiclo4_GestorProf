const express = require('express')
const router = express.Router()
const documentoCrtl = require('../controllers/documento.controller')
const upload = require('../libs/storage') 

// Agregar documentos
//router.post('/create-document', documentoCrtl.upload, documentoCrtl.crear)
router.post('/create-document', upload.single('url') , documentoCrtl.crear)

// Listar todos los documentos
router.get('/', documentoCrtl.listarDocs)

// Buscar documentos
router.get('/document-list/:categoria', documentoCrtl.buscarDoc)

// Actualizar documento
//router.put('/update-document/:id', documentoCrtl.upload, documentoCrtl.actualizar)
router.put('/update-document/:id', upload.single('url'), documentoCrtl.actualizar)

// Eliminar documento
router.delete('/delete-document/:id', documentoCrtl.eliminar)

module.exports = router