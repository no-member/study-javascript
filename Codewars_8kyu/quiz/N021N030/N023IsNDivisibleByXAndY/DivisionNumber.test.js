const isDivisible = require('./DivisionNumber');

test('isDivisible(10, 2, 5)은 true를 반환함', () => {
    expect(isDivisible(10, 2, 5)).toBe(true);
});

test('isDivisible(777, 7, 111)은 true를 반환함', () => {
    expect(isDivisible(777, 7, 111)).toBe(true);
});

test('isDivisible(555, 5, 111)은 true를 반환함', () => {
    expect(isDivisible(555, 5, 111)).toBe(true);
});

test('isDivisible(10, 2, 4)은 false를 반환함', () => {
    expect(isDivisible(10, 2, 4)).toBe(false);
});

test('isDivisible(88989, 2, 3)은 false를 반환함', () => {
    expect(isDivisible(88989, 2, 3)).toBe(false);
});

test('isDivisible(1231, 2, 3)은 false를 반환함', () => {
    expect(isDivisible(1231, 2, 3)).toBe(false);
});
