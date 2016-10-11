var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var General = sequelize.define('general', {
	U_ID: Sequelize.STRING, // not sure
	Q_ID: Sequelize.INTEGER, // not sure
	for_loop: Sequelize.INTEGER,
	while_loop: Sequelize.INTEGER,
	function: Sequelize.INTEGER,
	variables: Sequelize.INTEGER,
	if: Sequelize.INTEGER,
	else: Sequelize.INTEGER,
});

module.exports = General;
