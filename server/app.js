var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var db = require('./db/db.js');
var routes = require('./routes/routes.js');

var app = express();

//serving static files - will we need this with Angular 2?
// app.use(express.static(path.join(__dirname, '../app')));

//to parse incoming requests so we can access req.body.whatever
app.use(bodyParser.json());

//for more verbose server logging
app.use(logger('dev'));



var port = 3002;
app.listen(port, function() {
  console.log('server is listening on', port);
})

module.exports = app;