var express = require('express');

//require controllers
var userController = require('../users/userController.js');


module.exports = function(app, express) {
  //User routes
  app.get('/api/users', userController.getAllUsers);
  app.post('/api/users', userController.createUser);

  //Product routes


  //Review routes


  //Transaction routes


}





