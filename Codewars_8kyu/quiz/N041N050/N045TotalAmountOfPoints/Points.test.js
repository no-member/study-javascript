const Points = require('./Points');

test('Points.sum(["0:1", "2:3"])은 0를 반환함', () => {
    expect(Points.sum(['0:1', '2:3'])).toBe(0);
});