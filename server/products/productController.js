var pool = require('../db/db.js')

module.exports = {
  getAllProducts: function(req, res, next) {
    var queryStr = 'SELECT * FROM products';
    pool.query(queryStr, function(err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(result.rows);
    })
  },

  getProductById: function(req, res, next) {
    console.log('received', req.params.id)
    var id = req.params.id;
    var body = req.body;
    var queryStr = `SELECT * FROM products
      WHERE id=($1)`;
    pool.query(queryStr, [id], function(err, result) {
      if (err) return console.log(err);
      console.log('success', result);
      res.json(result.rows[0]);
    })
  },

  createProduct: function (req, res, next) {
    var body = req.body;
    
    var queryStr = `INSERT INTO products
      (category_id, owner_id, productname, priceperday, location)
      VALUES ((SELECT id from categories where category = $1), (SELECT id from users where username = $2), $3, $4, $5)`

    pool.query(queryStr, [body.category, body.owner, body.productname, body.priceperday, body.location], function(err, result) {
      if (err) return console.log(err);
      console.log('success', result);
      res.status(201).send('product created');
    })
  },

  updateProduct: function (req, res, next) {
    var id = req.params.id;
    var body = req.body;
    var queryStr = `UPDATE products SET 
      category_id=((SELECT id from categories where category = $1)), productname=($2), priceperday=($3), location=($4) WHERE id=($5)`;

    pool.query(queryStr, [body.category, body.productname, body.priceperday, body.location, id], function(err, result) {
      if (err) return console.log(err);
      console.log('success', result);
      res.status(201).send('updated product');
    })
  }
}

