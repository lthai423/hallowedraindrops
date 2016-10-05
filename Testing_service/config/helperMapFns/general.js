// assuming chai is already imported
// var expect = Chai.expect;


module.exports = {
    // a map for all general-related tests
  equal : function(input, output) { 
      expect(input).to.equal(output);
    },
    notEqual : function(input, output) {
      expect(input).to.not.equal(output);
  	}
}