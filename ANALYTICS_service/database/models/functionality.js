var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var Functionality = sequelize.define('functionality', {
	forloop: Sequelize.INTEGER,
	whileloop: Sequelize.INTEGER,
	function: Sequelize.INTEGER,
	variables: Sequelize.INTEGER,
	ifelse: Sequelize.INTEGER,
	switch:Sequelize.INTEGER,
});

module.exports = Functionality;
