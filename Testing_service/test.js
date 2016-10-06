var Mocha = require('mocha');
var Chai = require('chai');
var Test = Mocha.Test;
var expect = Chai.expect;
var methodMap = require('./methodMap.js');

var mochaInstance = new Mocha();
var dArr = req.body.dArr;
// make sure userFunction is named 'fn'
// expected example: var fn = eval(req.body.userFunction);

var Describe = function(describe) {
  this.description = describe.description;
  this.itsArr = describe.itsArr;
};

var It = function(it) {
  this.description = it.description;
  this.method = it.method;
  this.ans = it.ans;
  this.snippet = it.ans;
};

dArr.forEach(function(dObj){
  var suiteInstance = Mocha.Suite.create(mochaInstance.suite, dObj.description);
  dObj.itsArr.forEach(function(itObj){
    suiteInstance.addTest(new Test(itObj.description, function(){
      // methodMap[itObj.method](eval(itObj.snippet), itObj.ans);
      methodMap[itObj.method](2,4);
    }));
  });
});

mochaInstance.run(function(num_of_errs){
  res.send({num_of_errs: num_of_errs});
});