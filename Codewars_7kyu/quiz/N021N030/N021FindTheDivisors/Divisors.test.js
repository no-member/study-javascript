const Divisors = require('./Divisors');

test('divisors return array test1', () => {
    expect(Divisors.divisors(4))
        .toStrictEqual([2]);
});


test('divisors return array test2', () => {
    expect(Divisors.divisors(6))
        .toStrictEqual([2, 3]);
});
