const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create schema and Models

const UserSchema = new Schema({
  name: {type:String ,required:true},
  dob: {type:Date},
  address: {type:String},
  email: {type:String, required:true},
  password: {type:String, required: true},
  fathersname: {type:String},
  mothersname: {type:String},
  contact: {type:String},
  designation: {type: String},
  official: {type: Boolean, required: true},
  userDocs_id: {type: String, required: true},
  userRequest_id: {type: String, required: true},
  publicKey: {type: String},
  privateKey: {type: String}
});


const UserSchemaModel = mongoose.model('userSchema',UserSchema);

module.exports = UserSchemaModel;
