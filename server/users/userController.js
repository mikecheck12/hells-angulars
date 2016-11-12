module.exports = {
  getAllUsers: function(req, res, next) {
    console.log('getAllUsers fired');
    res.send('response from getAllUsers');
  },

  createUser: function(req, res, next) {
    console.log(req.body);
    var query = `INSERT INTO users (username, firstname, lastname, email) VALUES ("Lukie", "Luke", "Wilson", "wilson.palooza@gmail.com");`;

    res.send("received");
  }

}