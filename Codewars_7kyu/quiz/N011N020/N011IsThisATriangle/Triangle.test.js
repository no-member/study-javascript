const Triangle = require('./Triangle');

describe('return true', () => {
    test('isTriangle(1, 2, 2)', () => {
        expect(Triangle.isTriangle(1, 2, 2)).toBe(true);
    });

    test('isTriangle(4, 2, 3)', () => {
        expect(Triangle.isTriangle(4, 2, 3)).toBe(true);
    });
});

test('isTriangle(2, 2, 4)은 false를 반환함', () => {
    expect(Triangle.isTriangle(2, 2, 4)).toBe(false);
});
