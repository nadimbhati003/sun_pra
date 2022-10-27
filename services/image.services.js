import multer from "multer";
import path from "path";
//console.log("images upload ")
const imageStorage = multer.diskStorage({
    destination:'images',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '_' + Date.now() + path.extname(file.originalname))

    }
})

export const imageUpload = multer({
    storage:imageStorage,
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error('please upload a image'))
        }
        cb(undefined,true)
    }
})