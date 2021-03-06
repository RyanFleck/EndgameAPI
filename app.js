var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var allthedata = require('./routes/allthedata');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v6/users', users);
app.use('/api/v6/allthedata', allthedata);
app.get('/', (req,res)=>{
    console.log('Docs served.');
    res.sendFile(path.join(__dirname+'/static/useless.html'));
});

module.exports = app;
