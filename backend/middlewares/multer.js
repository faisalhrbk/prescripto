import multer from 'multer'

const diskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb('uploads/')
    },
    filename: (req,file,cb) => {
cb(file.originalname)
    }
})

export default multer({storage: diskStorage})


