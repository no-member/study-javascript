const isIsogram = require('./Isograms');

test('isIsogram("hi")는 true를 반환한다.', ()=>{
    expect(isIsogram('hi')).toBe(true);
});

test('isIsogram("moose")는 false를 반환한다.', ()=>{
    expect(isIsogram('moose')).toBe(false);
});
