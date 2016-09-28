// Routes received by the server
module.exports = (app) => {
  app.route('/pizza')
    .get((req, res) => {
      console.log('pizza');
      res.send('Getting that REPL SERVER');
    })
    .post((req, res) => {
      runCode(req.body.code, (data) => {
        res.send(data);
      });
    });
};
