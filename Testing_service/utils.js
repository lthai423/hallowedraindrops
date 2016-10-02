var db = require('./database/config.js');
var Test = require('./database/models/testing.js');

module.exports = {
  newTest: function (id, input, output, code, callback) {
    var test = new Test({
      question_id: id,
      fnInput: input,
      fnOutput: output,
      sourceCode: code
    });

    test.save((err, newTest) => {
      if (err) {
        callback(err);
        return;
      }
      console.log('New test added to db: ' , newTest);
      callback(null, newTest);
    });
  },

  updateTest: function(id, input, output, code, callback) {
    Test.findOne({question_id: id}).exec((err, found) => {
      if (err) {
        callback(err);
        return;
      }
      if (found) {
        found.fnInput = input;
        found.fnOutput = output;
        found.sourceCode = code;
        found.save((err, test) => {
          if (err) {
            callback(err);
            return;
          }
          console.log('Test has been updated ', test);
          callback(null, test);
        });
      } else {
        callback(err, null);
      }
    });
  }
};

