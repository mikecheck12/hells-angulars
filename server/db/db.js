//node-postgres.  Docs link here: https://www.npmjs.com/package/pg
var pg = require('pg');
var schema = require('./schema');
// database details - PRIVATE
var dbConfig = require('./dbConfig.js');


//set up postgres client pooling
var config = {
  user: dbConfig.username,
  database: dbConfig.dbName,
  password: dbConfig.password,
  port: 5432,
  max: 10, //max clients in the pool
  idleTimeoutMillis: 30000 //how long a client can be idle before being closed
}

// Uncomment this line if you want to test on your local DB.
// var dbConfig.url = 'postgres://localhost:5432/hells'

// set database location
var connectionString = process.env.DATABASE_URL || dbConfig.url;

//instantiate a new pg client
var client = new pg.Client(connectionString);

//connect to our database
client.connect();

//set up the schema
var query = client.query(schema);
query.on('end', () => { client.end(); });


