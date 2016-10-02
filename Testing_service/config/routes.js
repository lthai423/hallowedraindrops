// Routes received by the server
var utils = require('../utils.js');
module.exports = (app) => {

  /**
    * @name /api/repl
    * @desc Creates a new REPL instance or runs request javascript code.
    *       Sends back the output of the code to the user.
    * @param {req, res} the request and response for calls
    * @returns {nothing}
    */
  app.route('/api/test')
    .get((req, res) => {
      res.send('Grab new test');
    })
    .post((req, res) => {
      runCode(req.body.code, req.path, (data) => {
        console.log('data', data);
        res.send(data);
      });
    });
};
