// Routes received by the Analytics Server
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
			res.send(200);
		}) 
		.post((req, res) => { /* route hits */
			console.log('value for req.body is: ', req.body);
			res.send('Receiving the body');
		});

}