// Routes for the editor
var adminRouter = require('express').Router();
var adminController = require('./adminController.js');



adminRouter.route('/challenge/*')
  .get((req, res, next) => {
    adminController.getQuestion(req, res);
  })
  .post((req, res, next) => {
    //addTest commented out as it is not implemented
    adminController.addQuestion(req, res, () => {
      // adminController.addTest(req, res, () => {
        res.sendStatus(201);
      // });
    });
  });

adminRouter.route('/*')
  .get((req, res) => {
    res.render('index.html');
  });

module.exports = adminRouter;
