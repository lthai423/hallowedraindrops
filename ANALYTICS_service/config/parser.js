// going to help parse the file

/* NOTES NOTES NOTES: 
	- we can parse further if in our "cleanCode" fn we cut out all lines ending in: ')', '}'
	- ^^ more important... since we are devoting a lot of run-time per item while parsing
  - for generalJS, we are removing all instances where the '(' is used and required
	- In the future refactor, we need to separate the logic into different files
	- Need to send the code into utilsFunctionality.js
*/

// use a test file for .js parsing
var testFile = require('./testJS.js');


// readabilityJS table requirements
var readability = {
	indentation: null,
	function_code_length: null, // we can get later
	repeated_statements: null, // not sure how to do yet
	num_comments: null,
	code_length: null,
}

// functionality table requirements
var functionality = {
	speed: null,
	space: null,
};

// generalJS table requirements
var generalJS = {
	// 'for\(': 0, // have 2 instances of this, and re-combine later
	'for ': 0,
	'forEach': 0,
	// 'while\(': 0, // 2 spaces and more 
	'while': 0,
	// 'function\(': 0,
	'function ': 0,
	'var': 0,
	// 'if\(': 0,
	'if': 0,
	'else': 0,
	'else': 0,
	'switch': 0, // not sure if I want to look into switch-statements
};

// jsKnowledge table requirements
var jsKnowledge = {
	'forEach': 0,
	'map': 0,
	'filter': 0,
	'reduce': 0,
	'apply': 0,
	'call': 0,
	'bind': 0,
	'arguments': 0,
	'push': 0,
	'pop': 0,
	'slice': 0,
	'splice': 0,
	'shift': 0,
	'unshift': 0,
	'sort': 0,
	'reverse': 0,
	'length': 0,
};

var code = testFile.code;
var code2 = code; 

var len = code2.length;
var numComments = 0;

// require in the utilsReadability.js
var readability = require('./utils/utilsReadability.js')(code, readability);

console.log(readability.code);
console.log(readability.parser);
var commentsFilteredCode = readability.code;

// require in the utilsFunctionality.js
// var functionality = require('./utils/utilsFunctionality.js')(testFile.code, functionality);

var general = require('./utils/utilsGeneralAndKnowledgeParser.js')(commentsFilteredCode, generalJS);

console.log('value for general is: ', general);
var knowledge = require('./utils/utilsGeneralAndKnowledgeParser.js')(commentsFilteredCode, jsKnowledge);

// IGNORE CODE BELOW, COMMETNING OUT FOR NOW.


// module.exports = (req) => {
	// console.log('value for req in parser.js is: ', req);
	// we are able to get it from the backend to the front-end 
//}

/** DEAL WITH THE MODULE.EXPORTS ONCE IT WORKS **/

/* 
 * @name: countLines
 * @input: code to parse.
 * @output: an object that contains the number counts spaces and indents per each line of code as well as an array of the 'code' string cleaned of '' and 'new lines'
 * @notes: naively works, but if there's even one space in that line, it'll
 * log it and won't delete it
*/

// var countLines = (code2) => {
// 	var returnObj = {};
// 	var copy = code2;
// 	var spaceCounter = [];
// 	var copyLines = copy.split('\n');

// 	for(var i = 0; i < copyLines.length; i++) {
// 		if(copyLines[0] === '') {
// 			// checks if the first character is a new line
// 			copyLines.splice(i, 1); // remove that index
// 		}
// 	}

// 	// do another round after all '' have been spliced out

// 	for(var j = 0; j < copyLines.length; j++) {
// 		// default set the counter_else to 0 if end of line is reached
// 		var counter_else = 0;
// 		for(var k = 0; k < copyLines[j].length; k++) {
// 			if(copyLines[j][k] === ' ') {
// 				counter_else++;
// 			} else {
// 				spaceCounter.push(counter_else);
// 				counter_else = 0; 
// 				break;
// 			}
// 		}// end of inner-for loop
// 	}// end of outer-for loop

// 	returnObj['indents'] = countLineScore(spaceCounter);
// 	returnObj['indents_arr'] = spaceCounter;
// 	returnObj['code'] = cleanCodeLines(copyLines);


// 	return returnObj;
// } // end of countLines

// /* 
//  * @name: cleanCodeLines
//  * @input: array of code
//  * @output: remove all arrays that only have '' or are filled with spaces
//  * @notes: is called in the countLines fn.
// */

// var cleanCodeLines = (arr) => {
// 	// we can assume that if the first character is a '' or ' ', then we can remove that line
// 	// we also remove lines that have no characters, and only spaces -- hence the regex
// 	var cleanedCode = [];
// 	var regex = /[^\s\\]/;


// 	for(var i = 0; i < arr.length; i++) {
// 		if(arr[i][0] === '' || arr[i].length === 0 || regex.exec(arr[i]) === null) {
// 			arr.splice(0, 1); // splice that item out
// 		} else {
// 			cleanedCode.push(arr[i]);
// 		}
// 	}
// 	return cleanedCode;
// }

// /* 
//  * @name: countLineScore
//  * @input: an array indicating the spaces before each line
//  * @output: provides an 'indentation score' regarding the user's code
//  * @notes: is called in the countLines fn.
// */

// var countLineScore = (arr) => {

// 	var score = 0;
// 	for(var i = 1; i < arr.length; i++) {
// 		if(arr[i] > arr[i - 1]) {
// 			score = score + arr[i];
// 		} else if(arr[i] < arr[i - 1]) {
// 			score = score - arr[i];
// 		}
// 		// if the indentation is equal, nothing happens
// 	}
// 	// subtract the very first score
// 	score = score = arr[0];
// }

// /* 
//  * @name: removeComments
//  * @input: n/a, works on the global variable: 'code2'
//  * @output: removes code from // to /n and /* to its *\\
//  * @notes: Doesn't account for // that are spaced out (i.e. '/    /')
// */

// var removeComments = (code2) => {
// 	while(len >= 0) {
// 		var firstSlashIndex = code2.indexOf('//');
// 		var firstStarComment = code2.indexOf('/*');
// 		var secondStarComment = code2.indexOf('*/');

// 		if(firstSlashIndex !== -1) {
// 			// increment the numComments
// 			numComments++;

// 			// need to remove that line
// 			var textToBeRemoved = code2.slice(firstSlashIndex, code2.length);

// 			// change the str to be of everything past the comment
// 			var newLineIndex = textToBeRemoved.indexOf('\n');
			
// 			// well, we know the first index includes the '//', so we can cut from
// 			// 0 to newLine
// 			var textToBeRemoved = textToBeRemoved.slice(0, newLineIndex);
// 			code2 = code2.replace(textToBeRemoved, '');
// 		} else if(firstStarComment !== -1 && secondStarComment !== -1) {
// 			// increment the numComments
// 			numComments++;

// 			// re-apply logic for removing '//' to '/*'
// 			var textToBeRemoved = code2.slice(firstStarComment, secondStarComment+2); // need a '+2' to account for '*/'

// 			code2 = code2.replace(textToBeRemoved, '');
// 		} else {

// 			// no more comments left, so set to -1 and exit while-loop
// 			len = -1;
// 			return code2;
// 		}
// 	}
// } // end of removeComments

// // remove all comments and /* */ from code
// var code2 = removeComments(code2);
// // console.log('num of comments is: ', numComments);
// // console.log('code2 is: ', code2); // good

// // counts the lines and removes all empty lines
// // arr_code2 is returned an object
// var arr_code2 = countLines(code2); // HERE IT FAILS
// var codeNew = arr_code2.code;
// // var testCode = codeNew.join(' ');
// // console.log('testCode is: ', testCode);



// /* 
//  * @name: generalParse
//  * @input: the code to be parsed, and the obj to be parsed against
//  * @output: checks for occurrences of all items in the generalParse table
//  * @notes: Doesn't account for // that are spaced out (i.e. '/    /')
// */

// var generalParse = (code, parser) => {

// 	// generalJS;
// 	for(var i = 0; i < code.length; i++) {
// 		var codeSplit = code[i].split(' ');
// 		// console.log('code split is: ', codeSplit);
// 		for(var key in parser) {
// 			for(var k = 0; k < codeSplit.length; k++) {
// 				var re = new RegExp(key);
// 				if(re.exec(codeSplit[k]) !== null){
// 					parser[key]++;
// 				}
// 			}
// 		}
// 	}
// 	return parser;
// 	// aim for this is to parse for: 'for, while, var, if/else'
// 	// var splitCode = code2.split(' ');
// }

// generalParseResults = generalParse(codeNew, generalJS); 
// jsKnowledgeParseResults = generalParse(codeNew, jsKnowledge);

// console.log('generalParser: ', generalParseResults);
// console.log('jsKnowledge Parser: ', jsKnowledgeParseResults);




