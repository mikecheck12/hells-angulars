var express = require('express');

//require controllers
var userController = require('../users/userController.js');
var productController = require('../products/productController.js');

module.exports = function(app, express) {
  //User routes
  app.get('/api/users', userController.getAllUsers);
  app.get('/api/users/:id', userController.getUserById);
  app.post('/api/users', userController.createUser);
  app.put('/api/users/:id', userController.updateUser);

  //Product routes
  app.get('/api/products', productController.getAllProducts);
  app.get('/api/products/:id', productController.getProductById);
  app.post('/api/products', productController.createProduct);
  app.put('/api/products/:id', productController.updateProduct);
  //Review routes


  //Transaction routes


}





