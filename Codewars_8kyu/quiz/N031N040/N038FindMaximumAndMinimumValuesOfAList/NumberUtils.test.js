const max = require('./NumberUtils');

test('max([1, 2])은 2를 반환함', () => {
    expect(max([1, 2])).toBe(2);
});