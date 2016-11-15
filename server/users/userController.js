var pool = require('../db/db.js')

module.exports = {
  getAllUsers: function(req, res, next) {
    console.log('getAllUsers fired');
    var queryStr = 'SELECT * FROM users';
    pool.query(queryStr, function(err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(result.rows);
    })
  },

  createUser: function(req, res, next) {
    console.log(req.body); //we need to parse this out and add the info to the queryStr
    var body = req.body;
    // NOTE: you must use single quotes for the values section of the query
    var searchUserStr = `SELECT * FROM users 
      WHERE username = ($1)
    `
    pool.query(searchUserStr, [body.username], function(err, result) {
      if (err) return console.log(err);
      console.log(result);
      if (result.rows.length > 0) {
        res.status(200).send('User already exists');
      } else {
        var queryStr = `INSERT INTO users
          (username, firstname, lastname, email, profilepic)
          VALUES ($1, $2, $3, $4, $5)`
        pool.query(queryStr, [body.username, body.first, body.last, body.email, body.picture], function(err, result) {
          if (err) return console.log(err);
          console.log('success', result);
          res.send(result.rows);
        })
      }
    })
    
  },

  getUserById: function (req, res, next) {
    var id = req.params.id;
    var body = req.body;
    var queryStr = `SELECT * FROM users 
      WHERE id=($1)`;
    pool.query(queryStr, [id], function(err, result) {
      if (err) return console.log(err);
      console.log('success', result);
      res.json(result.rows[0]);
    })
  },

  updateUser: function (req, res, next) {
    var id = req.params.id;
    var body = req.body;
    var queryStr = `UPDATE users SET 
      username=($1), firstname=($2), lastname=($3), email=($4) WHERE id=($5)`;

    pool.query(queryStr, [body.username, body.firstname, body.lastname, body.email, id], function(err, result) {
      if (err) return console.log(err);
      console.log('success', result);
      res.status(201).send('updated user');
    })
  }
}