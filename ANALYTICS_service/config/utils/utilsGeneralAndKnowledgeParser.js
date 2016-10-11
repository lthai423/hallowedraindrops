/* notes on the regex obj 
 * run the forEach after the for
*/

module.exports = (code, parser) => {
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
	return parser;
		// aim for this is to parse for: 'for, while, var, if/else'
		// var splitCode = code2.split(' ');
}
