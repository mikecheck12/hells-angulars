var pool = require('../db/db.js');

var queryStringWithProducts =

module.exports = {

  getTransactionsBySellerId: function (req, res) {
    var queryStr = `SELECT transactions.bookedfrom
      , transactions.bookedto
      , transactions.totalValue
      , transactions.status_id
      , products.productname
      , users.firstname
      FROM transactions
      INNER JOIN products
          on products.id = transactions.product_id
      INNER JOIN users
          on users.id = transactions.buyer_id
      WHERE seller_id = ($1)`;

    pool.query(queryStr,[req.params.id],function(err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.json(result.rows);
    })
  },

  getRentalsByBuyerId: function (req, res) {
    var queryStr = `SELECT transactions.bookedfrom
      , transactions.bookedto
      , transactions.totalValue
      , transactions.status_id
      , products.productname
      , users.firstname
      FROM transactions
      INNER JOIN products
          on products.id = transactions.product_id
      INNER JOIN users
          on users.id = transactions.seller_id
      WHERE buyer_id = ($1)`;
    pool.query(queryStr,[req.params.id],function(err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.json(result.rows);
    })
  }
}
