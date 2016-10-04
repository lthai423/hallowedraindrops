var service = require('./services.js');

module.exports = {
  user: (req, res, next) => {
    if (req.isAuthenticated()) { return next(); }
    // res.redirect('/login');
    //leave as next for testing
    next();
  },

  moderator: (req, res, next) => {
    var id = req.user.id;
    service.findUser(id, (user) => {
      if (user.moderator) {
        console.log('This guy is an moderator!');
        next();
      }
      res.redirect('/');
    });
  },

  admin: (req, res, next) => {
    var id = req.user.id;
    service.findUser(id, (user) => {
      if (user.admin) {
        console.log('This guy is an admin!');
        next();
      }
      res.redirect('/');
    });
  }
};
