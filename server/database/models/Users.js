var sequelize = require('../config');


var User = sequelize.define('user', {
  login: Sequelize.STRING,
  id: Sequelize.STRING,
  name: Sequelize.STRING,
  avatar_url: Sequelize.STRING,
  github_url: Sequelize.STRING,
  repos_url: Sequelize.STRING,
  email: Sequelize.STRING,
  created_at: Sequelize.STRING,
  updated_at: Sequelize.STRING,
  company: Sequelize.STRING
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});


module.exports = User;


