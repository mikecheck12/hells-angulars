//node-postgres.  Docs link here: https://www.npmjs.com/package/pg
var pg = require('pg');

// database details - PRIVATE
var dbConfig = require('./dbConfig.js');
// dbConfig.url = 'postgres://localhost:5432/hells'  // Uncomment this line if you want to test on your local DB.

//set up postgres client pooling
var config = {
  user: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,
  port: 5432,
  database: dbConfig.dbName,
  max: 10, //max clients in the pool
  idleTimeoutMillis: 30000 //how long a client can be idle before being closed
}

var pool = new pg.Pool(config);
module.exports = pool;


var schema = require('./schema');
// // set database location
// var connectionString = process.env.DATABASE_URL || dbConfig.url;

// //instantiate a new pg client
// var client = new pg.Client(connectionString);

// //connect to our database
// client.connect();

// //set up the schema - THIS WILL DROP ALL TABLES.
// var query = client.query(schema);
// query.on('end', () => { client.end(); });


