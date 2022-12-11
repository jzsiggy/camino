const crypto = require('crypto');
const multer = require('multer');
const multerS3 = require('multer-s3');

const { s3 } = require('./awsS3');

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    key: function (req, file, cb) {
      cb(null, crypto.randomUUID())
    }
  })
})

module.exports = {
    upload
}