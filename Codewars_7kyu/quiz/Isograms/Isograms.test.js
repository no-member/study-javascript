const isIsogram = require('./Isograms');

test('isIsogram("hi")는 true를 반환한다.', ()=>{
    expect(isIsogram('hi')).toBe(true);
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
