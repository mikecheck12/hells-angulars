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

    // NOTE: you must use single quotes for the values section of the query
    var queryStr = `INSERT INTO users
      (username, firstname, lastname, email)
      VALUES ('lukie', 'luke', 'wilson', 'l@l.com');`

    pool.query(queryStr, function(err, result) {
      if (err) return console.log(err);
      console.log('success');
      console.log(result)
      res.send("user created");
    })
  }
}