const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create schema and Models

const UserDocs = new Schema({
    documentId: {type: String},
    _10thDMC: {type:String},
    _12thDMC: {type:String},
    BirthCertificate: {type:String},
    RationCard: {type:String},
    AadharCard: {type:String},
    PANCard: {type:String},
    Passport: {type:String},
    DrivingLicense: {type:String},

});

const UserDocsModel = mongoose.model('userDocs',UserDocs);

module.exports = UserDocsModel;