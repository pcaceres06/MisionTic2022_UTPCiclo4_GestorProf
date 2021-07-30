const pruebaCtrl = {}

pruebaCtrl.obtener=(req,res)=>{
    res.send('funcionando desde get')
}

pruebaCtrl.crear=(req,res)=>{
    res.send('funcionando desde post')
}

pruebaCtrl.actualizar=(req,res)=>{
    res.send('funcionando desde put')
}

pruebaCtrl.eliminar=(req,res)=>{
    res.send('funcionando desde delete')
}


module.exports=pruebaCtrl
