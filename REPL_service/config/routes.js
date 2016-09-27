// Routes received by the server

module.exports = (app) => {

app.route('/api/repl')
  .get((req, res) => {
    var code = req.query;
    console.log(code);
    res.send('Getting that REPL SERVER');
  })
  .post((req, res) => {
    var code = req.body;
    runCode(code.code, (data) => {
      console.log(data);
    });
    res.send('POSTING that REPL Server');
  });

};
