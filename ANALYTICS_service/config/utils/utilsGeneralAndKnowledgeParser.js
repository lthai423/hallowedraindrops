/* notes on the regex obj 
 * run the forEach after the for
*/

module.exports = (code, parser, readability) => {
		// generalJS;
	for(var i = 0; i < code.length; i++) {
		var codeSplit = code[i].split(' ');
		for(var key in parser) {
			for(var k = 0; k < codeSplit.length; k++) {
				var re = new RegExp(key);
				if(re.exec(codeSplit[k]) !== null){
					parser[key]++;
				}
			}
		}
	}

	// for general, the readability parser is also passed in
	if(readability) {
		readability['function_code_length'] = (parser['function'] * 1.0) / readability['code_length'];
	}

	return parser;
		// aim for this is to parse for: 'for, while, var, if/else'
		// var splitCode = code2.split(' ');
}
