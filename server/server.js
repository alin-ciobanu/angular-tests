
var express = require('express');
var bodyParser = require('body-parser');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var path = require('path');
var fs = require('fs');

GLOBAL.app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.query());

app.use(function (req, res, next) {
    // url decoding middleware
    req.url = req.url
        .replace(/\&/gi, '%26')
        .replace(/=/gi, '%3D')
        .replace(/\+/gi, '%2B')
        .replace(/@/gi, '%40')
        .replace(/:/gi, '%3A')
        .replace(/\$/g, '%24')
        .replace(/,/gi, '%2C');
    try {
        req.url = decodeURIComponent(req.url);
    }
    catch (err) {
        console.log(req.url);
    }
    req.url = req.url.replace(/[/]+/g, '/');
    next();
});

mongoose.connect("mongodb://localhost/countries-db");

db = mongoose.connection;
db
    .on('error', function () {console.error('DB connection error.')})
    .once('open', function() {console.log('DB Connection established.')});

var port = 80;

require('./routes/CountriesRoute.js');

// resolve statics
// use client folder as root path /
app.use('/', express.static(path.resolve('client/')));

// START THE SERVER
app.listen(port);
console.log('Server started on port ' + port);
