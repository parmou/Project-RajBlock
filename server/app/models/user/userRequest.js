const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create schema and Models

const UserRequest = new Schema({
    documentId: {type:String},
    _10thDMC_id: {type: String},
    _12thDMC_id: {type: String},
    BirthCertificate_id: {type: String},
    RationCard_id: {type: String},
    AadharCard_id: {type: String},
    PANCard_id: {type: String},
    Passport_id: {type: String},
    DrivingLicense_id: {type: String},
});

const UserRequestModel = mongoose.model('userRequest',UserRequest);

module.exports = UserRequestModel;