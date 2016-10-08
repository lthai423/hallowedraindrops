//This sets up the web server
const express = require('express');
const app = express();

// add in middleware here

// add in routes as well

var port = process.argv[2] || 1337; 
if(!module.parent) {
	app.listen(port, () => {
		console.log('Web Server listening on port' + port + '!');
	});
}

module.exports = {
	app: app
};