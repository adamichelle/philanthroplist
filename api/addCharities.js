const admin = require('firebase-admin');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const streamifier = require('streamifier');
const util = require('util');

const db = require('./lib/firebase');
const getJsonFromXlsx = require('./lib/returnJsonFromXlsx');

cloudinary.config("process.env.CLOUDINARY_URL");

const multerUpload = multer({
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname)
        if (ext !== '.xlsx' && ext !== '.csv') {
            req.fileValidationError = "Only .xlsx and .csv files are allowed";
            return callback(null, false, req.fileValidationError)
        }
    
        callback(null, true)
    }
})

const getModifiedCharitiesArray = (charitiesArray) => {
    const modifyArray = async (charity) => {
        const extension = charity.charity_image.split(".")[1];

        let streamUpload = (charityImage) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                    {
                        format: extension,
                        public_id: charity.name,
                        folder: "charities"
                    },
                  (error, result) => {
                    if (result) {
                      resolve(result);
                    } else {
                      reject(error);
                    }
                  }
                );
        
               streamifier.createReadStream(charityImage).pipe(stream);
            });
        };

        const charityImage = fs.readFileSync(path.join(__dirname, '_files', charity.charity_image));

        let result = await streamUpload(charityImage);
        charity.charity_image = result.secure_url;
        const involvementOptions = charity.involvement_options.split(/,\s+|,/g);
        charity.involvement_options = involvementOptions;
        const area_of_focus = charity.area_of_focus.split(/,\s+|,/g);
        charity.area_of_focus = area_of_focus;
        charity.createdAt = admin.firestore.Timestamp.fromDate(new Date());
        charity.updatedAt = admin.firestore.Timestamp.fromDate(new Date());

        return charity;
    }

    return Promise.all(charitiesArray.map( charity => modifyArray(charity) ));
}

module.exports = async (req, res) => {
    try {
        const upload = util.promisify(multerUpload.single('charitiesList'));

        await upload(req, res);

        const charitiesExcelFile = req.file;
        
        const charitiesArray = getJsonFromXlsx(charitiesExcelFile.buffer);

        const modifiedCharitiesArray = await getModifiedCharitiesArray(charitiesArray);

        var batch = db.batch();
        let docRef;

        modifiedCharitiesArray.forEach((charity) => {
            docRef = db.collection('charities').doc();
            batch.set(docRef, charity);
        })
        
        await batch.commit();
        res.status(201).json({ success: true, data: { last_document_id: docRef.id }, message: "Charities successfully added" })
    } catch (error) {
        res.status(500).json({ success:false, data: null, message: "An error occured. Error:" + error.message })
    }
}