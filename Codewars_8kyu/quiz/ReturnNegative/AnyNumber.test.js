const makeNegative = require('./AnyNumber');

test('makeNegative(1)은 -1를 반환함',() =>{
    expect(makeNegative(1)).toBe(-1);
});