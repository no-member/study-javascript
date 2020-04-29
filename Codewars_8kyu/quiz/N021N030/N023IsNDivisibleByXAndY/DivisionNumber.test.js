const isDivisible = require('./DivisionNumber');

test('isDivisible(10, 2, 5)은 true를 반환함',() =>{
    expect(isDivisible(10, 2, 5)).toBe(true);
});

test('isDivisible(10, 2, 4)은 false를 반환함',() =>{
    expect(isDivisible(10, 2, 4)).toBe(false);
});
