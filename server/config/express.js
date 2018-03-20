var express  = require('express');
var app      = express();

var bodyParser   = require('body-parser');

var path=require('path');
/* Database connectivity */
var mongoose = require('mongoose');
var configDB = require('./mongodb.js');
mongoose.connect(configDB.url);

app.use(bodyParser()); 

app.use( express.static(path.join(__dirname,'../../' ,  'dist' ) ) );

require('../app/routes/user.js')(app);
require('../app/routes/government.js')(app)
require('../app/routes/routes.js')(app);

module.exports=app;