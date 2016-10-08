var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var Readability = sequelize.define('readability', {
	U_ID: Sequelize.STRING, // not sure
	Q_ID: Sequelize.INTEGER, // not sure
	indentation: Sequelize.DOUBLE,
	function_code_length: Sequelize.DOUBLE,
	code_length: Sequelize.INTEGER,
	repeated_statements: Sequelize.DOUBLE,
});

module.exports = Readability;