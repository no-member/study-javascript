const Divisors = require('./Divisors');

test('divisors return array test1', () => {
    expect(Divisors.FindDivisor(4))
        .toStrictEqual([2]);
});


test('divisors return array test2', () => {
    expect(Divisors.FindDivisor(6))
        .toStrictEqual([2, 3]);
});
