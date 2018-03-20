var array = require("../../config/blockchain.js");
var driver = array[0];
var conn = array[1];

module.exports = function(app) {
    

    app.get('/user', (req,res) => {
        res.send('hello');
    })

    
}
