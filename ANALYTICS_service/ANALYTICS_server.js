//This sets up the web server
const express = require('express');
const app = express();

// add in middleware here
require('./config/middleware.js')(app, express);

// add in routes as well
require('./config/routes.js')(app);

var port = process.argv[2] || 1337; 
if(!module.parent) {
	app.listen(port, () => {
		console.log('Analytics Server listening on port' + port + '!');
	});
}

module.exports = {
	app: app
};