// going to help parse the file

/* NOTES NOTES NOTES: 
	- we can parse further if in our "cleanCode" fn we cut out all lines ending in: ')', '}'
	- ^^ more important... since we are devoting a lot of run-time per item while parsing
  - for generalJS, we are removing all instances where the '(' is used and required


*/

// use a test file for .js parsing
var testFile = require('./testJS.js');

/* notes on the regex obj 
 * run the forEach after the for
*/
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
 * @name: countLines
 * @input: code to parse.
 * @output: an object that contains the number counts spaces and indents per each line of code as well as an array of the 'code' string cleaned of '' and 'new lines'
 * @notes: naively works, but if there's even one space in that line, it'll
 * log it and won't delete it
*/

var countLines = (code2) => {
	var returnObj = {};
	var copy = code2;
	var spaceCounter = [];
	var copyLines = copy.split('\n');

	for(var i = 0; i < copyLines.length; i++) {
		if(copyLines[0] === '') {
			// checks if the first character is a new line
			copyLines.splice(i, 1); // remove that index
		}
	}

	// do another round after all '' have been spliced out

	for(var j = 0; j < copyLines.length; j++) {
		// default set the counter_else to 0 if end of line is reached
		var counter_else = 0;
		for(var k = 0; k < copyLines[j].length; k++) {
			if(copyLines[j][k] === ' ') {
				counter_else++;
			} else {
				spaceCounter.push(counter_else);
				counter_else = 0; 
				break;
			}
		}// end of inner-for loop
	}// end of outer-for loop

	returnObj['indents'] = countLineScore(spaceCounter);
	returnObj['indents_arr'] = spaceCounter;
	returnObj['code'] = cleanCodeLines(copyLines);


	return returnObj;
} // end of countLines

/* 
 * @name: cleanCodeLines
 * @input: array of code
 * @output: remove all arrays that only have '' or are filled with spaces
 * @notes: is called in the countLines fn.
*/

var cleanCodeLines = (arr) => {
	// we can assume that if the first character is a '' or ' ', then we can remove that line
	// we also remove lines that have no characters, and only spaces -- hence the regex
	var cleanedCode = [];
	var regex = /[^\s\\]/;


	for(var i = 0; i < arr.length; i++) {
		if(arr[i][0] === '' || arr[i].length === 0 || regex.exec(arr[i]) === null) {
			arr.splice(0, 1); // splice that item out
		} else {
			cleanedCode.push(arr[i]);
		}
	}
	return cleanedCode;
}

/* 
 * @name: countLineScore
 * @input: an array indicating the spaces before each line
 * @output: provides an 'indentation score' regarding the user's code
 * @notes: is called in the countLines fn.
*/

var countLineScore = (arr) => {

	var score = 0;
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > arr[i - 1]) {
			score = score + arr[i];
		} else if(arr[i] < arr[i - 1]) {
			score = score - arr[i];
		}
		// if the indentation is equal, nothing happens
	}
	// subtract the very first score
	score = score = arr[0];
}


// var countLines = (code2) => {
// 	var spaceCounter = [];
// 	var copy = code2;
// 	var firstSpace = copy.indexOf(' ');
// 	var firstLine = copy.indexOf('\n');

// 	while(firstLine !== -1) {
// 		if(copy[0] !== ' '){
// 			spaceCounter.push(0); // indicates no space increases
// 			console.log('firstspace is:', firstSpace);
// 			console.log('firstline is: ', firstLine);
// 			if(firstLine === 0) {
// 				// a new line with no spacing
// 				console.log('index from 0 to 1 is: ', copy.slice(0, 1));
// 				copy = copy.replace(copy.slice(0, 2), '');
// 				// not sure the above way is appropriate in removing that line
// 				console.log('value for copy at', copy);
// 			} else {
// 				copy = copy.replace(copy.slice(0, firstLine), '');
// 			}
// 		} else {
// 			var counter = 1;
// 			for(var i = 1; i < firstLine; i++) {
// 				if(copy[i] === ' ') {
// 					counter++;
// 				} else {
// 					spaceCounter.push(counter);
// 					break; // push the value into spaceCounter, then break
// 				}
// 			} // end of for-loop
// 			copy = copy.replace(copy.slice(0, firstLine), '');
// 		}
// 		// redefine and recheck after each line
// 		firstSpace = copy.indexOf(' ');
// 		firstLine = copy.indexOf('\n');
// 		console.log('value for firstLine at the end is: ', firstLine);
// 	} // end of while
// 	console.log('value for copy after everything', copy); // nothing
// 	return spaceCounter;
// }

/* 
 * @name: removeComments
 * @input: n/a, works on the global variable: 'code2'
 * @output: removes code from // to /n and /* to its *\\
 * @notes: Doesn't account for // that are spaced out (i.e. '/    /')
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

// remove all comments and /* */ from code
var code2 = removeComments(code2);
// console.log('num of comments is: ', numComments);

// counts the lines and removes all empty lines
// arr_code2 is returned an object
var arr_code2 = countLines(code2);
var codeNew = arr_code2.code;
// var testCode = codeNew.join(' ');
// console.log('testCode is: ', testCode);





var generalParse = (code) => {

	// generalJS;
	for(var i = 0; i < code.length; i++) {
		var codeSplit = code[i].split(' ');
		console.log('code split is: ', codeSplit);
		for(var key in generalJS) {
			for(var k = 0; k < codeSplit.length; k++) {
				var re = new RegExp(key);
				if(re.exec(codeSplit[k]) !== null){
					generalJS[key]++;
				}
			}
		}
	}
	console.log(generalJS);
	// aim for this is to parse for: 'for, while, var, if/else'
	// var splitCode = code2.split(' ');
}

generalParse(codeNew); // before actual parsing, we need to figure out a way to get the spaces out. 



