const makeNegative = require('./AnyNumber');

test('makeNegative(123)은 -123를 반환함', () => {
    expect(makeNegative(123)).toBe(-123);
});

test('makeNegative(1.39)은 -1.39를 반환함', () => {
    expect(makeNegative(1.39)).toBe(-1.39);
});

test('makeNegative(-321)은 -321을 반환함', () => {
    expect(makeNegative(-321)).toBe(-321);
});

test('makeNegative(-3.8)은 -3.8을 반환함', () => {
    expect(makeNegative(-3.8)).toBe(-3.8);
});

test('makeNegative(0)은 0을 반환함', () => {
    expect(makeNegative(0)).toBe(0);
});
