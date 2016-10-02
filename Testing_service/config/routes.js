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
      utils.getTest(req, res);
    })
    .post((req, res) => {
      utils.addTest(req, res);
    })
    .put((req, res) => {
      utils.updateTest(req,res);
    });
};
