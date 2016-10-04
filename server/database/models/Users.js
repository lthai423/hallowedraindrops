var sequelize = require('../config.js').sequelize;
var Sequelize = require('sequelize');


var User = sequelize.define('user', {
  login: Sequelize.STRING,
  id: {type: Sequelize.UUID, primaryKey: true},
  name: Sequelize.STRING,
  created_at: Sequelize.DATE,
  avatar_url: Sequelize.STRING,
  github_url: Sequelize.STRING,
  repos_url: Sequelize.STRING,
  email: Sequelize.STRING,
  gitcreated_at: Sequelize.STRING,
  gitupdated_at: Sequelize.STRING,
  company: Sequelize.STRING
});

module.exports = User;


