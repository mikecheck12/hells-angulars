var express = require('express');

//require controllers
var userController = require('../users/userController.js');


module.exports = function(app, express) {
  //User routes
  app.get('/api/users', userController.getAllUsers);
  app.get('api/users:id', userController.getUserById);
  app.post('/api/users', userController.createUser);

  //Product routes
  app.get('/api/products', productsController.getAllProducts);
  app.get('api/products:id', productsController.getProductById);
  app.post('api/product', productsController.createProduct);
  
  //Review routes


  //Transaction routes


}





