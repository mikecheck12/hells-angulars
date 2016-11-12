var pg = require('pg'); //node-postgres.  Docs link here: https://www.npmjs.com/package/pg
var schema = require('./schema');


// set database location
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hells';

//instantiate a new pg client
var client = new pg.Client(connectionString);

//connect to our database
client.connect();
var query = client.query(schema);
query.on('end', () => { client.end(); });



