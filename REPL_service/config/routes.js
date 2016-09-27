// Routes received by the server
var runCode = require('./repl.js').runCode;

module.exports = (app) => {

app.route('/api/repl')
  .get((req, res) => {
    res.send('Getting that REPL SERVER');
  })
  .post((req, res) => {
    var code = req.body;
    runCode(code.code, (data) => {
      res.send(data);
    });
  });

};
