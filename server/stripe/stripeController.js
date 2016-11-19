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
    var userId = req.query.state;
    console.log(code, userId);
    // send the code to stripe for accesstoken
    if (code) {
      var postBody = {
        url: TOKEN_URI,
        form: {
          grant_type: 'authorization_code',
          client_id: stripeAPI.CLIENT_ID,
          code: code,
          client_secret: stripeAPI.API_KEY
        }
      };
      request.post(postBody, function(err, r, body) {
        console.log(JSON.parse(body));
        var stripeUserId = JSON.parse(body).stripe_user_id;
        var queryString = `UPDATE users SET
      stripeaccountid=($1) WHERE authId=($2)`;
        pool.query(queryString , [stripeUserId, userId], function(err, result) {
          if (err) return console.log(err);
          console.log('success', result);
        })
        res.redirect('/#/profile');
      });
    }
  },

  createCharge: function (req, res) {
    console.log(req.body)
    var token = req.body.token.id;
    var amount = req.body.amount
    stripe.charges.create({
      amount: amount * 100,
      currency: 'usd',
      source: token,
    });
  }
}
