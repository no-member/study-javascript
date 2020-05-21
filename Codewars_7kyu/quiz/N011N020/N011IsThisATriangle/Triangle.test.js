const Triangle = require('./Triangle');

test('Trinagle.isTriangle(1, 2, 2)은 true를 반환함', () => {
    expect(Triangle.isTriangle(1, 2, 2)).toBe(true);
});
