const grow = require('./Grow');

test('grow([1, 2])은 2를 반환함', () => {
    expect(grow([1, 2])).toBe(2);
});

test('grow([4, 1, 1, 1, 4])은 16를 반환함', () => {
    expect(grow([4, 1, 1, 1, 4])).toBe(16);
});

test('grow([4, 0, 1, 1, 4])은 0를 반환함', () => {
    expect(grow([4, 1, 0, 1, 4])).toBe(0);
});
