var array = require("../../config/blockchain.js");
var driver = array[0];
var conn = array[1];
var userDocs = require('../models/user/userDocs');
var userSchema = require('../models/user/userSchema');
var userRequest = require('../models/user/userRequest');
var randomstring = require("randomstring");
const axios = require('axios');
const API = 'https://test.bigchaindb.com/api/v1/transactions/';
var bcrypt = require('bcrypt');
var passcode;

/* blockchain */
var array = require("../../config/blockchain.js");
var driver = array[0];
var conn = array[1];
var data =[];
module.exports = function(app) {

    app.get('/', (req,res) => {
        res.send('hello');
    })

    app.get('/user', (req,res) => {
      // Use connect method to connect to the server
      res.send('hello');
    })

    app.post('/user/login', (req,res) => {

       if(req.body.email === 'dhisupa' && req.body.password === 'dhisupa'){
                    res.send('admin')
        }
       
        userSchema.findOne({email:req.body.email}, (err,result) => {
            if(err) {
                res.send(err);
            }
            else if(result) {
                data.push(result);
                var AadharCard_id = '';
                if (result.password === req.body.password)
                    userDocs.findOne({documentId: result.userDocs_id}, (err,newResult) => {
                        if(err) {

                        }
                        else {
                            AadharCard_id = newResult.AadharCard;
                        }
                    })
                     axios.get(`${API}/${AadharCard_id}`)
                        .then(posts => {
                         data.push(posts.assets.data.details.file_path);
                        })
                        .catch(error => {
                         res.status(500).send(error)
                        });
                         res.send(data);
                    }
            else {
                console.log('not here')
                res.send('wrong credentials');
            }
        })

        //res.send(str);
    });


    app.post('/user/signup', (req,res) => {
            //var objectId1 = new ObjectID();
            //var objectId2 = new ObjectID();
            var objectId1 = randomstring.generate(24);
            var objectId2 = randomstring.generate(24);
            const key = new driver.Ed25519Keypair();
            var docs = new userDocs({
                documentId : objectId1,
                _10thDMC: objectId1,
                _12thDMC: objectId1,
                BirthCertificate: objectId1,
                RationCard: objectId1,
                AadharCard: objectId1,
                PANCard: objectId1,
                Passport: objectId1,
                DrivingLicense: objectId1,
            });
            docs.save().then(function(err){
                if(err) {
                    console.log(err);
                }
                console.log('done');
            })
            var request = new userRequest({
                documentId : objectId2,
                _10thDMC_id: objectId2,
                _12thDMC_id: objectId2,
                BirthCertificate_id: objectId2,
                RationCard_id: objectId2,
                AadharCard_id: objectId2,
                PANCard_id: objectId2,
                Passport_id: objectId2,
                DrivingLicense_id: objectId2,
             });
            request.save().then(function(err){
                if(err) {
                    console.log(err);
                }
                console.log('done')
            });

                /*bcrypt.hash(req.param('password'), 10, function(err, hash) {
                // Store hash in your password DB.
                if(err){
                    console.log(err);
                }
                else{
                    passcode = hash;
                    console.log('in f'+passcode);
                }
                });*/
                console.log(passcode);

                var user = new userSchema({
                name: req.body.name,
                email: req.body.email,
                //password: passcode,
                password: req.body.password,
                official: false,
                userDocs_id: objectId1,
                userRequest_id: objectId2,
                dob:'2016-05-18T16:00:00Z',
                fathersname: "cham",
                mothersname:"preeti",
                address: "YNR",
                designation: "khaali",
                contact: objectId1,
                publicKey: key.publicKey,
                privateKey: key.privateKey,
                contact: objectId1,
            });
            user.save().then(function(err){
                if(err) {
                    console.log(err);
                }

                console.log('jkghygv');
                res.send('user');



            })
    });



    //Method to handle admin calls
    app.get('/admin/:deptName', (req,res) => {
       // console.log(req.params.deptName);
        var designation = req.params.deptName;
        var resEmpList = userSchema.find({ 'designation':designation}, function (err,resEmpList) {
           // console.log(resEmpList);
            res.send(resEmpList);
        });

    })

    app.post('/toggle',(req,res)=>{
        var id = req.param("_id");
        //console.log(id, (req.param("official")));
        var status;
        if(req.param("official") == false){
            status = true;
        }else{
            status = false;
        }
        //console.log(status)
        userSchema.findOneAndUpdate({_id : id}, {official: status},{ returnOriginal:false, new : true },(err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                //console.log(result);
              //  res.send(result);
            }

        });
        userSchema.find({},(err,res) =>{
            if(err){
                res.send(err);
            }else{
                res.send(res);
            }
        });
    })


    app.get('/posts', (req, res) => {
        axios.get(`${API}/posts`)
          .then(posts => {
            res.status(200).json(posts.data);
          })
          .catch(error => {
            res.status(500).send(error)
          });
      });

    

    app.post('/saveUserDetail', (req,res) => {
      name= req.param('name'),
      gender= req.param('gender'),
      phone= req.param('phone'),
      email= req.param('email'),
      dob= req.param('dob');
      console.log(name+' ---'+gender+' '+phone+' '+email+' '+dob);

      var char = new userSchema({
        name:"Himanshu",
        email : "hd41@gmail.com",
        dob : "asdadsadads"
      });

      char.save();

      userSchema.findOneAndUpdate({name : name }, {email: email, dob : dob, contact : contact}).then(function(result){

      });

    })


    app.get('/:id', (req,res) => {
        userSchema.find({publicKey: req.params.id}, (err,user) => {
            if(err) {
                res.send(err);
            }
            else if(user) {
                res.send(user);
            }
            else {
                res.send('null');
            }
        })
    })

    /*app.post('/request/pan/:id', (req,res)=> {
        userSchema.find({email: req.body.email}, (err,user) => {
            if(err) {
                res.send(err);
            }
            else if(user) {
                userRequest.findOneAndUpdate({PANCard_id: randomstring.generate(24)}, (err,res) => {

                })
            }
        })
    })*/



}
