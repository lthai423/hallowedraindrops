var sequelize = require('../db.js').sequelize;
var Sequelize = require('sequelize');

var General = sequelize.define('general', {
	U_ID: Sequelize.STRING, // not sure
	Q_ID: Sequelize.INTEGER, // not sure
	for_loop: Sequelize.INTEGER,
	while_loop: Sequelize.INTEGER,
	function: Sequelize.INTEGER,
	variables: Sequelize.INTEGER,
	if_else: Sequelize.INTEGER,
	switch_case:Sequelize.INTEGER,
});

module.exports = General;
