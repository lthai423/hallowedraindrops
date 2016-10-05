var User = require('./Users.js');
var Question = require('./Questions.js');

User.hasMany(Question);
Question.belongsTo(User);
