const check = require('./Check');

test('check([1, 2], 2)은 true를 반환함', () => {
    expect(check([1, 2], 2)).toBe(true);
});