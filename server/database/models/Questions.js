var sequelize = require('../config.js').sequelize;
var Sequelize = require('sequelize');

var Question = sequelize.define('question', {
  name: Sequelize.STRING,
  difficulty: Sequelize.STRING,
  attempts: Sequelize.STRING,
  answers: Sequelize.STRING,
  prompt: Sequelize.TEXT,
  comments: Sequelize.TEXT,
});

module.exports = Question;


