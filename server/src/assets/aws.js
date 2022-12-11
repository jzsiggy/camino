let AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_S3_ACCESSKEY,
    secretAccessKey: process.env.AWS_S3_SECRETKEY,
    endpoint:  process.env.AWS_S3_ENDPOINT,
    s3ForcePathStyle: true,
    signatureVersion: 'v4'
});

let s3 = new AWS.S3({ params : { Bucket : process.env.AWS_S3_BUCKET_NAME } });

module.exports = {
    s3
};