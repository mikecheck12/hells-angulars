var pg = require('pg'); //node-postgres.  Docs link here: https://www.npmjs.com/package/pg
var schema = require('./schema');

//database URLs. Use localdb if you want to test locally.
var db_url = require('./databaseUrl.js');
var localdb = 'postgres://localhost:5432/hells'
// set database location
var connectionString = process.env.DATABASE_URL || db_url;




//instantiate a new pg client
var client = new pg.Client(connectionString);

//connect to our database
client.connect();

//set up the schema
var query = client.query(schema);
query.on('end', () => { client.end(); });