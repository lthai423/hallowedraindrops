var Mocha = require('mocha');
var Chai = require('chai');
var Test = Mocha.Test;
var expect = Chai.expect;
var should = Chai.should;

var methodMap = require('./mappedMethod.js');

var wrapper = function(item){
  return eval('(' + item + ')');
}

module.exports = {
  testSuite: function(req, res){
    // console.log(req.body);
    // res.send('ok');
    var mochaInstance = new Mocha();
    var dArr = req.body.dArr;
    // make sure userFunction is named 'fn'
    // expected example: var fn = eval(req.body.userFunction);
    dArr.forEach(function(dObj){
      var suiteInstance = Mocha.Suite.create(mochaInstance.suite, dObj.description);
      dObj.itsArr.forEach(function(itObj){
        suiteInstance.addTest(new Test(itObj.description, function(){
          methodMap[itObj.method](wrapper(itObj.snippet), wrapper(itObj.ans));
        }));
      });
    });

    mochaInstance.run(function(num_of_errs){
      res.send({num_of_errs: num_of_errs});
    });
  }
};

// var methodMap = {
//     equal: function(submit, answer){
//         expect(submit).to.equal(answer);
//     }
// };

// var Describe = function(describe) {
//   this.description = describe.description;
//   this.itsArr = describe.itsArr;
// };

// var It = function(it) {
//   this.description = it.description;
//   this.method = it.method;
//   this.ans = it.ans;
//   this.snippet = it.snippet;
// };

// var dArr = [],
// 		itsArr;

// for (var i = 0; i < 10; i++){
// 	itsArr = [];
// 	for (var j = 0 ; j < 10; j++){
// 		itsArr.push(new It({description: "it test" + j, method: 'equal'}));
// 	}
// 	dArr.push(new Describe({itsArr: itsArr, description: "hello" + i}));
// }

// var dArr = [
//   {
//     description:'test1',
//     itsArr: [
//       {
//         method: 'equal',
//         description: 'test description1'
//       },
//       {
//         method: 'equal',
//         description: 'test description2'
//       }
//     ]
//   },
//   {
//     description:'test2',
//     itsArr: [
//       {
//         method: 'equal',
//         description: 'test description3'
//       },
//       {
//         method: 'equal',
//         description: 'test description4'
//       }
//     ]
//   },
//   {
//     description:'test3',
//     itsArr: [
//       {
//         method: 'equal',
//         description: 'test description5'
//       },
//       {
//         method: 'equal',
//         description: 'test description6'
//       }
//     ]
//   },
//   {
//     description:'test4',
//     itsArr: [
//       {
//         method: 'equal',
//         description: 'test description7'
//       },
//       {
//         method: 'equal',
//         description: 'test description8'
//       }
//     ]
//   }
// ];
