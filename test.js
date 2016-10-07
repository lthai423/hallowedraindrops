var Mocha = require('mocha');
var Chai = require('chai');
var Test = Mocha.Test;
var expect = Chai.expect;

var mochaInstance = new Mocha();

var methodMap ={
    equal: function(submit, answer){
        expect(submit).to.equal(answer);
    }
};

var dArr = [
    {
        description:'test1',
        itsArr: [
            {
                method: 'equal',
                description: 'test description1'
            },
            {
                method: 'equal',
                description: 'test description2'
            }
        ]
    },
    {
        description:'test2',
        itsArr: [
            {
                method: 'equal',
                description: 'test description3'
            },
            {
                method: 'equal',
                description: 'test description4'
            }
        ]
    },
    {
        description:'test3',
        itsArr: [
            {
                method: 'equal',
                description: 'test description5'
            },
            {
                method: 'equal',
                description: 'test description6'
            }
        ]
    },
    {
        description:'test4',
        itsArr: [
            {
                method: 'equal',
                description: 'test description7'
            },
            {
                method: 'equal',
                description: 'test description8'
            }
        ]
    },

];

var testSuite = function(dArr){
    dArr.forEach(function(dObj){
        var suiteInstance = Mocha.Suite.create(mochaInstance.suite, dObj.description);
        dObj.itsArr.forEach(function(itObj){
            suiteInstance.addTest(new Test(itObj.description, function(){
                methodMap[itObj.method](2,22);
            }));
        });
    });

    mochaInstance.run(function(num_of_errs, a, b){
        console.log(num_of_errs, 'item');
    });
};

testSuite(dArr);