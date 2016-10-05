var request = require('request-promise');
var Question = require('.././database/models/Questions.js');
var service = require('../../config/services.js');

module.exports = {
  addQuestion: (req, res, callback) => {
    console.log('Adding Question');
    var question = req.body.question;
    Question.sync().then(() => {
      return Question.find({where:{name: question.name}}).then((question) => {
        if (!question) {
          res.send('Question Not Found');
          Question.create(question).then((q) => callback(q));
        }
      callback(question);
      });
    });
  },

  addTest: (req, res, callback) => {
    var options = {
      method: 'POST',
      uri: service.Testing,
      body: req.body.test,
      json: true
    };
    request(options)
      .then((test) => {
        console.log('Test was added');
        callback(test);
      });
  },

  getQuestion: (req, res) => {
    console.log('Getting Question');
    var urlPath = req.path.split('challenge/')[1];
    Question.sync().then(() => {
      return Question.find({where:{name: urlPath}}).then((question) => {
        if (!question) {
          res.send('Question Not Found');
        } else {
          res.send(question);
        }
      });
    });
  }
};
