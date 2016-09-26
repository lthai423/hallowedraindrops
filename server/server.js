//This sets up the web server
const express = require('express');
const app = express();
const services = require('./config/services.js');
var replRouter = require('./resources/repl/replRoutes.js');




//use middleware
require('./config/middleware.js')(app, express);

// serve static files
app.use(express.static(__dirname + '../client'));

// use services
app.use('/api/replservice', replRouter);
// require('./config/routes.js')(app);

// set port up
var port = process.argv[2] || 8080;
// app.listen(port, function () {
//   console.log('Web Server listening on port ' + port +' !');
// });



//setup for socket
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(port, () => {
	console.log('socket on 8080');
});
io.on('connection', (socket) => {
  console.log('a user has connected');
});
// end for socket