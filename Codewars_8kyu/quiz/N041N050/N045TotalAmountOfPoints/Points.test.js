const Points = require('./Points');

test('Points.sum(["0:1"])은 0를 반환함', () => {
    expect(Points.sum(["0:1"])).toBe(0);
});