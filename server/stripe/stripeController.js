var pool = require("../db/db.js");
var request = require("request");
var stripeAPI = require("../config/stripeConfig.js");

var express = require('express');
var app = express();

var stripe = require("stripe")("sk_test_H7b0CoYGGcrnw0HadVLk5Eht");

var TOKEN_URI = "https://connect.stripe.com/oauth/token";
var AUTHORIZE_URI = "https://connect.stripe.com/oauth/authorize";

module.exports = {

  // retrive code after user authorize stripe
  getCode: function (req, res) {
    var code = req.query.code;
    // send the code to stripe for accesstoken
    request.post({
      url: TOKEN_URI,
      form: {
        grant_type: 'authorization_code',
        client_id: stripeAPI.CLIENT_ID,
        code: code,
        client_secret: stripeAPI.API_KEY
      }
    }, function(err, r, body) {
      console.log(JSON.parse(body));
      console.log('locals', req.locals)
    var accessToken = JSON.parse(body).access_token;

    // Do something with your accessToken

    // For demo's sake, output in response:
    req.flash('info', 'Flash is back!')
    res.redirect('/')

    });
  },

  createCharge: function (req, res) {
    console.log(req.body)
    var token = req.body.id;
    stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      source: token,
      destination: 'acct_19End4Cm1eI1OU4w'
    });
  }
}
