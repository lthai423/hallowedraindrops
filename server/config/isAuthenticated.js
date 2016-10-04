var service = require('./services.js');

module.exports = {
  user: (req, res, next) => {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
  },

  moderator: (req, res, next) => {


  },

  admin: (req, res, next) => {
    console.log(req, req.isAuthenticated());
    if (req.isAuthenticated()) {
      var id = req.user.id;
      service.findUser(id, (user) => {
        if (user.admin) {
          console.log('This guy is an admin!');
        }
      });
      next();
    }
    res.redirect('/');
  }
};
