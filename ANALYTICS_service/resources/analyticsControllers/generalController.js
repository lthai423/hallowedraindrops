var request = require('request-promise');
var Gneral = require('../../database/models/generalJS.js');

// var url: "http://localhost:1337/api/analytics";

// we need the questionID and userID before any of this. 

module.exports = (data, username) => {
	console.log('usernaem value is: ', username);
	console.log('data value is: ', data);
	



}

/*
sequelize.sync({ force: true }).then(function() {
  return User.create({ username: 'john', password: '1111' });
}).then(function(user1) {
  return User.find({ username: 'john' })
}).then(function(user2) {
  console.log(user2.get()); // Get returns a JSON representation of the user
}); 
*/