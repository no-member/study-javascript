const Triangle = require('./Triangle');

test('isTriangle(1, 2, 2)은 true를 반환함', () => {
    expect(Triangle.isTriangle(1, 2, 2)).toBe(true);
});

test('isTriangle(2, 2, 4)은 false를 반환함', () => {
    expect(Triangle.isTriangle(2, 2, 4)).toBe(false);
});
