const imgctrl = {}
const nodemailer = require('nodemailer');
const Img = require('../models/img');
// const multer = require("multer"); 
// const path = require("path");  
// app.use("/images", express.static(path.join("backend/images"))); 

// const MIME_TYPE_MAP = {  
//     'image/png': 'png',  
//     'image/jpeg': 'jpg',  
//     'image/jpg': 'jpg'  
//   };  

// const storage = multer.diskStorage({  
//     destination: (req, file, cb)=>{  
//         const isValid = MIME_TYPE_MAP[file.mimetype];
//         let error = new Error("Invalid Mime Type");  
//     if(isValid){  
//       error = null;  
//     }    
//         cb(null, "backend/images"); 
//     },
//     filename: (req, file, cb)=>{  
//         const name = file.originalname.toLowerCase().split(' ').join('_');
//         const ext = MIME_TYPE_MAP[file.mimetype];
//         cb(null, name+ '-'+ Date.now()+ '.'+ ext);  
//     }   
// });

imgctrl.getImgs = async (req, res) => {
    const imgs = await Img.find();
    res.json(imgs)
}
imgctrl.createImg = async (req, res) => {
    // const mutlerimg = (multer(storage).single("image"));
    const newImg = new Img(req.body);
    console.log(req.body)
    await newImg.save();
    res.send({
        message: "Img Created"
    })
}

imgctrl.bulkimg = async (req, res) => { 
    console.log(req.body)
    await Img.insertMany(req.body)
    .then(function(docs) {
         
         res.send({
            message: docs
        })
    })
    .catch(function(err) {
        
    });
}


imgctrl.getImg = async (req, res) => {
    const img = await Img.findById(req.params.id);
    res.send(img);
}


imgctrl.editImg = async (req, res) => {
    await Img.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "Img Updated"
    });
}
imgctrl.deleteImg = async (req, res) => {
    await Img.findByIdAndDelete(req.params.id);
    res.json({
        status: "Img Deleted"
    });
}

imgctrl.postmail = async( req,res)=>{

    console.log(req.body.email)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'sullansumith@gmail.com',
            pass: 'sumithdeepan'
        }
    });
    
    let mailOptions = {
        from: 'sullansumith@gmail.com',
        to: req.body.email,
        subject: 'arra',
        text: 'New try!',
        attachments: [{
            filename: 'img.jpg',
            path: __dirname +'/img.jpg',

        }]
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success');
        
    });
    res.send({
        message: "Img Created"
    });

}
module.exports = imgctrl;