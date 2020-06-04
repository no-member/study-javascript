const Divisors = require('./Divisors');

test('divisors test1', () => {
    expect(Divisors.divisors(4))
        .toStrictEqual([2]);
});

