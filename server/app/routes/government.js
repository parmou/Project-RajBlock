var array = require("../../config/blockchain.js");
const UserSchema = require('../models/user/userSchema.js');

module.exports = function(app) {
    

    app.get('/government', (req,res) => {
        res.send('hello');
    })


    app.get('/government/allUsers/:id', (req,res) => {
        console.log(req.params.id);
        UserSchema.find({name: req.params.id, designation: 'khaali'}, (err,user) => {
            if(err) {
                console.log('error found');
            }
            else if (user) {
                res.send(user);
            }
            else {
                res.send('null');
            }
        })

        
    })
    
    
}
