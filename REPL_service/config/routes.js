// Routes received by the server

module.exports = (app) => {

app.route('/api/repl')
  .get((req, res) => {
    var code = req.body;
    res.send('Getting that REPL SERVER');
  })
  .post((req, res) => {
    res.send('POSTING that REPL Server');
  });

};
