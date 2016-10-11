var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var Readability = sequelize.define('readability', {
	U_ID: Sequelize.STRING, // not sure
	Q_ID: Sequelize.INTEGER, // not sure
	indentation: Sequelize.DOUBLE, // we have a score for this
	function_code_length: Sequelize.DOUBLE, 
	code_length: Sequelize.INTEGER, // we need to count this in regards to words
	repeated_statements: Sequelize.DOUBLE, // NO SCORE FOR THIS YET
	num_comments: Sequelize.INTEGER, // we have a score for this
});

module.exports = Readability;