// going to help parse the file

// use a test file for .js parsing
var testFile = require('./testJS.js');

// module.exports = (req) => {
	// console.log('value for req in parser.js is: ', req);
	// we are able to get it from the backend to the front-end 
//}

/** DEAL WITH THE MODULE.EXPORTS ONCE IT WORKS **/

var code = testFile.code;
// console.log('testFile is: ', testFile);
// console.log(code);

var comments = {
		'/': false,
		'*': false,
		'\\': false,
	};


var func_count = 0;
var y = code.split(' '); // split by spaces
// console.log(y);

var code2 = code; 

var len = code2.length;

var numComments = 0;

/* 
 * @name: removeComments
 * @input: n/a, works on the global variable: 'code2'
 * @output: removes code from // to /n and /* to its *\/
 *  
*/

var removeComments = (code2) => {
	while(len >= 0) {
		var firstSlashIndex = code2.indexOf('//');
		var firstStarComment = code2.indexOf('/*');
		var secondStarComment = code2.indexOf('*/');

		if(firstSlashIndex !== -1) {
			// increment the numComments
			numComments++;

			// need to remove that line
			var textToBeRemoved = code2.slice(firstSlashIndex, code2.length);

			// change the str to be of everything past the comment
			var newLineIndex = textToBeRemoved.indexOf('\n');
			
			// well, we know the first index includes the '//', so we can cut from
			// 0 to newLine
			var textToBeRemoved = textToBeRemoved.slice(0, newLineIndex);
			code2 = code2.replace(textToBeRemoved, '');
		} else if(firstStarComment !== -1 && secondStarComment !== -1) {
			// increment the numComments
			numComments++;

			// re-apply logic for removing '//' to '/*'
			var textToBeRemoved = code2.slice(firstStarComment, secondStarComment+2); // need a '+2' to account for '*/'

			code2 = code2.replace(textToBeRemoved, '');
		} else {

			// no more comments left, so set to -1 and exit while-loop
			len = -1;
			return code2;
		}
	}
} // end of removeComments

var code2 = removeComments(code2);
console.log('new code2 is: ', code2);
console.log('num of comments is: ', numComments);


