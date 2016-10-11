
// we need to send the code into here as well
var testFile = require('../testJS.js').code;

// note this object is different than the sequelize model in functionality.js

module.exports = (code, parser) => {

	var getSpeed = (code) => {
		var fn = () => { return eval(code)};

		var startTime = (new Date()).getTime();
			for(var i=0;i<1000;i++) {
		    fn();
		}
		var endTime = (new Date()).getTime();
		var diffTime = endTime - startTime;

		parser.speed = diffTime;

		// below is a better way, but not sure how to pull value out of 
		// console.time and console.timeEnd()

		// way to calculate speed: http://stackoverflow.com/questions/10617070/how-to-measure-execution-time-of-javascript-code-with-callbacks
		// console.time('test');
		// var test = () => {
		// 	for(var i = 0; i < 1000; i++) {
		// 		fn();
		// 	}
		// }
		// var x = console.timeEnd('test');

	};

	var getSpace = (code) => {
		parser.space = code.length;
	};

	getSpeed(code);
	getSpace(code);

	return parser;
}; 