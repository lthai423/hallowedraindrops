var request = require('request-promise');
var Question = require('.././database/models/Questions.js');
var service = require('../../config/services.js');

module.exports = {
  addQuestion: (req, res) => {
    console.log('Adding Question');
  },

  addTest: (req, res) => {
    var options = {
      method: 'POST',
      uri: service.Testing,
      body: req.body.test,
      json: true
    };
    request(options)
      .then((test) => {
        console.log('Test was added');
        res.send(test);
      });
  },

  getQuestion: (req, res) => {
    console.log('Getting Question');
    var urlPath = req.path.split('challenge/')[1];
    Question.sync().then(() => {
      return User.find({where:{name: urlPath}}).then((question) => {
        if (!question) {
          res.send('Question Not Found');
        } else {
          res.send(question);
        }
      });
    });
  }
};
