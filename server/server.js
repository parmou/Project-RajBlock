var app=require('./config/express');
var express = require('express');
var http=require('http');
var mongoose = require('mongoose');
var configDB = require('./config/mongodb');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
/**
 * Listen on provided port, on all network interfaces.
 */

var uploadFile = require('./app/routes/uploadFile');
app.use('/uploadFile',uploadFile);


app.set('port', process.env.PORT || 8000);
var port=app.get('port');
mongoose.connect(configDB.url);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/img/:x', function (req, res) {
    res.sendfile(path.resolve('./uploads/'+req.params.x));
});




app.listen(port, () => console.log(`API running on localhost:${port}`));


