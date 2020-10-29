const isIsogram = require('./Isograms');

test('isIsogram("")는 true를 반환한다.', ()=>{
  expect(isIsogram('')).toBe(true);
});

test('isIsogram("hi")는 true를 반환한다.', ()=>{
  expect(isIsogram('hi')).toBe(true);
});

test('isIsogram("hole")는 true를 반환한다.', ()=>{
  expect(isIsogram('hole')).toBe(true);
});

test('isIsogram("isogram")는 true를 반환한다.', ()=>{
  expect(isIsogram('isogram')).toBe(true);
});

test('isIsogram("moose")는 false를 반환한다.', ()=>{
  expect(isIsogram('moose')).toBe(false);
});

test('isIsogram("moOse")는 false를 반환한다.', ()=>{
  expect(isIsogram('moOse')).toBe(false);
});

test('isIsogram("sense")는 false를 반환한다.', ()=>{
  expect(isIsogram('sense')).toBe(false);
});

test('isIsogram("senSe")는 false를 반환한다.', ()=>{
  expect(isIsogram('senSe')).toBe(false);
});
