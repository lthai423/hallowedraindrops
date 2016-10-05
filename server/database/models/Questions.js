var sequelize = require('../config.js').sequelize;
var Sequelize = require('sequelize');

var Question = sequelize.define('question', {
  name: Sequelize.STRING,
  difficulty: Sequelize.INTEGER,
  attempts: Sequelize.INTEGER,
  answers: Sequelize.INTEGER,
  prompt: Sequelize.TEXT,
  comments: Sequelize.TEXT,
});

module.exports = Question;


