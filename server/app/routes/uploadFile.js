var express = require('express');
var router = express.Router();
var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');

var fs = require('fs');
var array = require("../../config/blockchain.js");
var driver = array[0];
var conn = array[1];

var userDocs = require('../models/user/userDocs');
var userSchema = require('../models/user/userSchema');

//our file upload function.
router.get('/', function (req, res, next){
  res.send("File Upload page");
});





router.post('/', function (req, res, next) {
     var publicKey = '';
     var privateKey = '';
     var path = '';
     var docId = '';
     var mailID = '';
     upload(req, res, function (err) {
        if (err) {
          console.log(err);
          return res.status(422).send("an Error occured")
        }
        path = req.file.path+'.jpg';
        mailID = req.body.emailID;
        console.log(mailID)
        const assetdata = {
        'details': {
                'file_path': path,
                }
        }

        const metadata = {'data':'data'};
        
        userSchema.findOne({email : req.body.emailID}, (err,result) => {
          if(err) {
            return err;
          }
          else {
            console.log(result)
            publicKey = result.publicKey;
            privateKey = result.privateKey;
            console.log(publicKey)
            docId = result.userDocs_id;
            console.log(docId);
            const txCreateDhruvamSimple = driver.Transaction.makeCreateTransaction(
            assetdata,
            metadata,

            // A transaction needs an output
            [ driver.Transaction.makeOutput(
                driver.Transaction.makeEd25519Condition(publicKey))
            ],
            publicKey


            )
          console.log(txCreateDhruvamSimple)
          txCreateDhruvamSimpleSigned = driver.Transaction.signTransaction(txCreateDhruvamSimple, privateKey)
          conn.postTransaction(txCreateDhruvamSimpleSigned)
          txid = txCreateDhruvamSimpleSigned.id
          console.log(txCreateDhruvamSimpleSigned);
          userDocs.findOneAndUpdate({documentId: docId},{AadharCard: txid}, {new:true},(err,newResult) => {
            if(err) {
              return err;
            }
            else {
              console.log(txid)
            }
          })
          }
        })

        return res.send("Upload Completed for "+path);
  });

   
})
module.exports = router;
