const admin = require('firebase-admin');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const multer = require('multer');
const path = require('path');
const util = require('util')

const db = require('./lib/firebase');

cloudinary.config("process.env.CLOUDINARY_URL");

const multerUpload = multer({
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            req.fileValidationError = "Only .png, .jpg and .jpeg files are allowed";
            return callback(null, false, req.fileValidationError)
        }
    
        callback(null, true)
    }
})

module.exports = async (req, res) => {
    try {
        const upload = util.promisify(multerUpload.single('charityImage'));

        await upload(req, res);

        const charityProfileImage = req.file;
        let charityInfo = req.body

        const extension = charityProfileImage.originalname.split(".")[1];
                
        function cloudinaryUpload(image) {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream({
                    format: extension,
                    public_id: charityInfo.name,
                    folder: "charities"
                },
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                });
                
                streamifier.createReadStream(image).pipe(stream);
            });
        }
                
        const result = await cloudinaryUpload(charityProfileImage.buffer);
        charityInfo.charity_image = result.secure_url;
        charityInfo.createdAt = admin.firestore.Timestamp.fromDate(new Date());
        charityInfo.updatedAt = admin.firestore.Timestamp.fromDate(new Date());

        const docRef = await db.collection("charities").add(charityInfo);

        res.status(201).json({ success: true, data: docRef.id, message: "Charity successfully added" })
    } catch (error) {
        res.status(500).json({ success:false, data: null, message: "An error occured. Error:" + error.message })
    }
}