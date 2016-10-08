var Sequelize = require('sequelize');
var fs = require('fs');
var pg = require('pg');

try {
	fs.accessSync(__dirname + '/../config/env/config.js', fs.F_OK);
	// file is present
	pgCred = require('../config/env/config.js').awspostgres;
} catch (e) {
	// It isn't accessible
	pgCred = require('../config/env/config_example.js').postgres;
}

// once we have a server setup, we can have it directly set to our URL
var sequelize = new Sequelize(pgCred.db, pgCred.user, pgCred.password, {
	host: pgCred.host,
	dialect: 'postgres',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});

sequelize
	.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully');
	})
	.catch(function(err) {
		console.log('Unable to connect to the database', err);
	});

// possible to use to create DB if it doesn't exist
// need Chris to explain

// BELOW CODE IS OUR OWN TEST CODE

// var pgInit = function(callback) {
// 	var dbName = 'codedrop';
// 	var username = 'hallowedraindrops';
// 	var password = 'codedrop';
// 	var host = '127.0.0.1';


	// var config = {
	// 	user: 'hallowedraindrops',
	// 	database: 'codedrop',
	// 	password: 'codedrop',
	// 	port: 5432,
	// 	max: 10,
	// };

	// var pool = new pg.Pool(config);

	// pool.connect(function(err, client, done) {
	// 	if(err) {
	// 		return console.log('error fetching from pool', err);
	// 	}
	// })

// 	var conStringPri = 'postgres://' + username + ':' + password + '@' + host + dbName;
// 	var conStringPost = 'postgres://' + username + ':' + password + '@' + host + '/' + dbName;

// 	// connect to postgres db
// 	pg.connect(conStringPri, function(err, client, done) {
// 	    // create the db and ignore any errors, for example if it already exists.
// 	    client.query('CREATE DATABASE ' + dbName, function(err) {
// 	        //db should exist now, initialize Sequelize
// 	        var sequelize = new Sequelize(conStringPost);
// 	        callback(sequelize);
// 	        client.end(); // close the connection
// 	    });
// 	});
// };

module.exports = {
	// init: pgInit,
	sequelize: sequelize // should be the sequelize defined on line15
};
