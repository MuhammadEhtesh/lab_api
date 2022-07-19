const util = require("util");
const multer = require("multer");
var fs = require('fs');
var moment = require('moment');

const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {

    if (!fs.existsSync(__basedir + "\\public\\images")){
      fs.mkdirSync(__basedir + "\\public\\images", { recursive: true });
    }

    cb(null, __basedir + "\\public\\images");
  },
  filename: (req, file, cb) => {
    if(file){
      req.file = file;
    }
    const filename = file.originalname.split('.')[0] + moment().format('YYYY-MM-DD HH:mm:ss:ss').replace(' ', '').replace(':', '').replace(':', '').replace('-', '').replace('-','') + "." + file.originalname.split('.')[1]; 
    req.imageUrl = filename;
    file.originalname = filename;
    console.log(filename);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;