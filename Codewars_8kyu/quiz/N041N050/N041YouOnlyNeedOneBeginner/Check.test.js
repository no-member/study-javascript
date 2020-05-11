const check = require('./Check');

test('check([1, 2], 2)은 true를 반환함', () => {
    expect(check([1, 2], 2)).toBe(true);
});

test('check([1, 2, 10], 0)은 false를 반환함', () => {
    expect(check([1, 2, 10], 0)).toBe(false);
});

test('check(["t", "e", "s", "t"], 0)은 false를 반환함', () => {
    expect(check([1, 2, 10], 0)).toBe(false);
});
