var dArr = [];
var itsArr = [];


itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'',
  method:'',
  ans:,
  snippet:
}));

itsArr.push(new It({
  description:'doesNotHaveString',
  method:'doesNotHaveString',
  ans: 'baz',
  snippet: 'foobar'
}));

itsArr.push(new It({
  description:'doesHaveString',
  method:'doesHaveString',
  ans: 'bar',
  snippet: 'foobar'
}));

itsArr.push(new It({
  description:'doesNotContainAllKeys',
  method:'doesNotContainAllKeys',
  ans:, '["rob", "foo"]',
  snippet: '{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesNotContainAnyKeys',
  method:'doesNotContainAnyKeys',
  ans: '"rob"',
  snippet: '{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesContainAllKeys',
  method:'doesContainAllKeys',
  ans: '"foo"',
  snippet:'{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesContainAllKeys',
  method:'doesContainAllKeys',
  ans: '{foo: 1}', // check if it's an array or an obj
  snippet: '{foo: 1, bar: 2, baz: 3}'
}));

itsArr.push(new It({
  description:'doesContainAnyKeys',
  method:'doesContainAnyKeys',
  ans: '"foo"',
  snippet: '{foo: 1, bar: 2}'
}));

itsArr.push(new It({
  description:'isNotResponding',
  method:'isNotResponding',
  ans: '"fox"',
  snippet: 'obj.baz = function() {}'
}));

itsArr.push(new It({
  description:'isResponding',
  method:'isResponding',
  ans: '"baz"',
  snippet: 'obj.baz = function() {}'
}));

itsArr.push(new It({
  description:'isNotRespondingToItself',
  method:'isNotRespondingToItself',
  ans: '"baz"',
  snippet: '() => { function Foo() {}; \
    Foo.bar = function() {}; \
    Foo.prototype.baz = function() {};\
    return Foo;\
  }'
}));

itsArr.push(new It({
  description:'isRespondingToItself',
  method:'isRespondingToItself',
  ans: '"bar"', // there shouldn't be a 'baz' method
  snippet: '() => { function Foo() {}; \
    Foo.bar = function() {}; \
    Foo.prototype.baz = function() {};\
    return Foo;\
  }'
}));

itsArr.push(new It({
  description:'isSatisfying',
  method:'isSatisfying',
  ans: 'function(num) { return num === 1 }',
  snippet: '1'
}));

itsArr.push(new It({
  description:'isNotSatisfying',
  method:'isNotSatisfying',
  ans: 'function(num) { return num === 1 }',
  snippet: '2' // 2 should never equal 1, so shouldnt' satisfy
}));

itsArr.push(new It({
  description:'isNotCloseTo',
  method:'isNotCloseTo',
  ans: '{numNotSupposedToBeCloseTo: 1, range: 0.5}',
  snippet: '3'
}));

itsArr.push(new It({
  description:'isCloseTo',
  method:'isCloseTo',
  ans: '{numSupposedToBeCloseTo: 1, range: 0.5}',
  snippet: '1'
}));

itsArr.push(new It({
  description:'isNotMembers',
  method:'isNotMembers',
  ans: '[4, 2]',
  snippet: '[4, 2, 5]' 
}));

itsArr.push(new It({
  description:'isMembers',
  method:'isMembers',
  ans: '[4, 2]',
  snippet: '[2, 4]'
}));

itsArr.push(new It({
  description:'isNotExtensible',
  method:'isNotExtensible',
  ans: 'null',
  snippet: 'Object.seal({})' // having it sealed should make it not extensible
}));

itsArr.push(new It({
  description:'isExtensible',
  method:'isExtensible',
  ans: 'null',
  snippet: '{}'
}));

itsArr.push(new It({
  description:'isSealed',
  method:'isSealed',
  ans: 'null',
  snippet: 'Object.seal({})'
}));

itsArr.push(new It({
  description:'isFrozen',
  method:'isFrozen',
  ans: 'null', // should be true since object is frozen
  snippet: 'Object.freeze({})'
}));

