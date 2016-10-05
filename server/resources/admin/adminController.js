var request = require('request-promise');
var Question = require('.././database/models/Questions.js');

module.exports = {
  addQuestion: () => {
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
