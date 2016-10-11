// Routes received by the Analytics Server
var parser = require('./parser.js');

module.exports = (app) => {

	/*
	 * @name: /api/analytics/sendcode
	 * @@desc: A route for the user to send code to
	 * @param: {req, res} the request and response for call. 
	 * -->req.body should contain code
	 * @returns: {nothing}
	 */

	 /* Note that the routes to the service will require attention on the
	 	- webserver's services.js / routes.js / repl (folder)

	*/
	app.route('/api/analytics/:userId/:problemId')
		.get((req, res) => { /* route hits */
			// go into db and get that user's code and problem id
			// also goes in to get their analytic information
			res.send(200);
		}) 
		.post((req, res) => { 

			var url = req.url;
			// ex is: /api/analytics/brian/1234
			var urlSplit = url.split('/');
			// 3 and 4 are respectively 'brian' and '1234'

			var username = urlSplit[3];
			var problem = urlSplit[4];

			parser(req.body, username, problem);

			res.send('Receiving the body');
			/* Notice that the userId and Problem Id are both on the route */
		});

}