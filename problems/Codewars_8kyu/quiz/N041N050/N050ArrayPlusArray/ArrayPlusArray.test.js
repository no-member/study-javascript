const arrayPlusArray = require('./ArrayPlusArray');

test('arrayPlusArray([1, 2, 3], [4, 5, 6])은 21를 반환함', () => {
    expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21);
});

test('arrayPlusArray([-1, -2, -3], [-4, -5, -6])은 -21를 반환함', () => {
    expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21);
});

test('arrayPlusArray([0, 0, 0], [0, 0, 0])은 0를 반환함', () => {
    expect(arrayPlusArray([0, 0, 0], [0, 0, 0])).toBe(0);
});
