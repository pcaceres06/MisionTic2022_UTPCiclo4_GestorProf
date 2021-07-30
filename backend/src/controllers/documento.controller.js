// Modelo documento
const Documento = require('../models/Document.model')

// Controlador
const documentoCrtl = {}

documentoCrtl.crear= async (req,res)=>{
    const {titulo, descripcion, tipoDoc, categoria, autor} = req.body
    const doc = new Documento({titulo, descripcion, tipoDoc, categoria, autor})
    
    if (req.file) {
        const {filename} = req.file
        doc.setUrl(filename)
    }

    await doc.save()
    res.json({status:"Documento agregado"})
    console.log(doc)
}

documentoCrtl.listarDocs= async (req,res)=>{
    const docs = await Documento.find()
    res.json(docs)
}

documentoCrtl.buscarDoc= async (req, res)=>{
    const doc = await Documento.find({"categoria":req.params.categoria})
    res.json(doc)
}

documentoCrtl.actualizar= async (req,res)=>{
    const {titulo, descripcion, tipoDoc, categoria, autor, url} = req.body
    const newDoc = {titulo, descripcion, tipoDoc, categoria, autor, url}
    await Documento.findByIdAndUpdate(req.params.id, newDoc)
    res.json({status:'Documento actualizado'})
}

documentoCrtl.eliminar = async (req,res)=>{
    await Documento.findByIdAndDelete(req.params.id)
    res.json({status:'Documento eliminado'})
}

module.exports = documentoCrtl