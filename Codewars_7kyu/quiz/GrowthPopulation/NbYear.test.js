const nbYear = require('./NbYear');

test('nbYear(1500, 5, 100, 5000)는 15', () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
});

