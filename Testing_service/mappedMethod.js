module.exports = {

  /*
   * overall: we'll be testing two versions, with
   * the first version being the snippetitted code made
   * by the user, and the second version being the
   * answer pulled from our answers db.
   * 
   * snippet: the input snippetitted by the testee
   * ans : the answer for that question
  */

  // snippet/ans should exist
  shouldExist : function (snippet, ans) {
    (snippet).should.exist(snippet);
  },

  // snippet/ans should not exist
  shouldNotExist : function (snippet, ans) {
    (snippet).should.not.exist(snippet);
  },

  // snippet/ans should Throw
  shouldThrowError : function (snippet) {
    (snippet).should.Throw(Error);
  },

  // snippet/ans should not throw
  shouldNotThrowError : function (snippet, ans) {
    should.not.Throw(snippet);
  },

  // snippet should equal ans
  shouldEqual: function (snippet, ans) {
    (snippet).should.equal(ans);
  },

  // snippet should not equal ans
  shouldNotEqual: function (snippet, ans) {
    (snippet).should.not.equal(ans);
  },

  /* Start of the use for 'Should' */

  // snippet should deep equal ans
  deepEqual: function (snippet, ans) {
    expect(snippet).to.deep.equal(ans);
  },
    
  // snippet is a type string
  isAString: function(snippet, ans) {
    expect(snippet).to.be.a('string');
  },
  
  // snippet is a type array
  isAnArray: function(snippet) {
    expect(snippet).to.be.instanceof(Array);
  },
    
  // snippet is a type of object
  isAnObject: function(snippet) {
    expect(snippet).to.be.an('object');
  },
  
  // target cannot add new properties and existing cannot be modified
  isFrozen: function(snippet){
    expect(snippet).to.be.frozen;
  },
    
  // target cannot add new properties and existing cannot be removed.
  isSealed: function(snippet){
    expect(snippet).to.be.sealed;
  },
    
  // target can add new properties to it
  isExtensible: function(snippet){
    expect(snippet).to.be.extensible;
  },
  
  // target cannot add new properties to it
  isNotExtensible: function(snippet){
    expect(snippet).to.be.extensible;
  },
    
  // asserts that the target is a superset of set, or that the target and set have the same strictly
  // equal members
  isMembers: function(snippet, ans){
    expect(snippet).to.include.members(ans);
  },
  
  // asserts that the target is not a superset of set, or that the target and set do not have the same 
  // strictly equal members
  isNotMembers: function(snippet, ans){
    expect(snippet).to.not.include.members(ans);
  },
  
  // asserts that snippet falls within delta of expected
  isCloseTo: function(snippet, expected, delta){
    expect(snippet).to.be.closeTo(expected, delta);
  },
  
  // asserts that snippet does not fall within delta of expected
  isNotCloseTo: function(snippet, expected, delta){
    expect(snippet).to.not.be.closeTo(expected, delta);
  },
  
  // Asserts that the target pass a given truth test
  isSatisfying: function(snippet, method){
    expect(snippet).to.satisfy(method);
  },
  
  // Asserts that the target does not pass a given truth test
  isNotSatisfying: function(snippet, method){
    expect(snippet).to.not.satisfy(method);
  },
  
  // Asserts that the target pass a given truth test
  isSatisfying: function(snippet, method){
    expect(snippet).to.satisfy(method);
  },
  
  // expects a specific instance of a method to respond 
  isRespondingToItself: function(snippet, ans){
    expect(snippet).itself.to.respondTo(ans);
  },
  
  // expects a specific instance of a method to not respond 
  isNotRespondingToItself: function(snippet, ans){
    expect(snippet).itself.to.not.respondTo(ans);
  },
  
  // Asserts that the object or class target will respond to a method.
  isResponding: function(snippet, ans){
    expect(snippet).to.respondTo(ans);
  },
  
  // Asserts that the object or class target will respond to a method.
  isNotResponding: function(snippet, ans){
    expect(snippet).to.not.respondTo(ans);
  },
  
  // asserts that the target contains any keys
  doesContainAnyKeys: function(snippet, ans){
    expect(snippet).to.have.any.keys(ans);
  },
  
  // asserts that the target contains all keys
  deosContainAllKeys: function(snippet, ans){
    expect(snippet).to.have.all.keys(ans);
  },
  
  // asserts that the target contains any keys
  doesNotContainAnyKeys: function(snippet, ans){
    expect(snippet).to.not.have.any.keys(ans);
  },
  
  // asserts that the target contains any keys
  doesNotContainAllKeys: function(snippet, ans){
    expect(snippet).to.not.have.all.keys(ans);
  },
  
  // asserts snippet does contain string in ans
  doesHaveString: function(snippet, ans){
    expect(snippet).to.have.string(ans);
  },
  
  // asserts snippet does not contain string in ans
  doesNotHaveString: function(snippet, ans){
    expect(snippet).to.not.have.string(ans);
  },
  
  // asserts snippet matches regex in ans
  willMatchRegex: function(snippet, ans){
    expect(snippet).to.match(ans);
  },
  
  willNotMatchRegex: function(snippet, ans){
    expect(snippet).to.not.match(ans);
  },
  
  isLengthOf: function(snippet, ans){
    expect(snippet).to.have.lengthOf(ans);
  },
  
  isNotLengthOf: function(snippet, ans){
    expect(snippet).to.not.have.lengthOf(ans);
  },
  
  isAboveLength: function(snippet, ans){
    expect(snippet).to.have.length.above(ans);
  },
  
  isBelowLength: function(snippet, ans){
    expect(snippet).to.have.length.below(ans);
  },
  
  isWithinLength: function(snippet, lower_bound, upper_bound){
    expect(snippet).to.have.length.within(lower_bound, upper_bound);
  },
};