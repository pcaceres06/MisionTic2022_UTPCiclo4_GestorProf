const multer = require('multer')
const mimeTypes = require('mime-types')

let folder = "" 

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if(mimeTypes.extension(file.mimetype).includes("pdf")){
            folder = "pdf"
        }else if(mimeTypes.extension(file.mimetype).includes("ppt")){
            folder = "ppt"
        }else{
            folder = "video"
        }
        
        console.log(`Documento cargado en la carpeta ${folder}`)
        cb(null,`uploads/${folder}`)
    },
    filename: function(req,file,cb){
        const date = Date.now()
        const today = new Date(date)
        const finalDate = today.toLocaleDateString().replace(/\//g,"-")
        const time = today.toTimeString().substr(0,7).replace(/:/g,"")
        console.log(finalDate)
        //console.log(`Formato hora ====>>> ${today.toTimeString()}`)
        cb(null,`${finalDate}_${time}_${file.originalname}`)
    }
})


const upload = multer({storage})

module.exports = upload