const max = require('./NumberUtils');

test('max([1, 2])은 2를 반환함', () => {
    expect(max([1, 2])).toBe(2);
});

test('max([100, 2, 0, -10, 999])은 999를 반환함', () => {
    expect(max([100, 2, 0, -10, 999])).toBe(999);
});

test('max([-2, -10, -999])은 -2를 반환함', () => {
    expect(max([-2, -10, -999])).toBe(-2);
});

test('max([])은 0를 반환함', () => {
    expect(max([])).toBe(0);
});

test('max(null)은 0를 반환함', () => {
    expect(max(null)).toBe(0);
});
