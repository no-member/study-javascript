const Divisors = require('./Divisors');

describe('divisors return array', () => {
    test('test1', () => {
        expect(Divisors.FindDivisor(4))
            .toStrictEqual([2]);
    });


    test('test2', () => {
        expect(Divisors.FindDivisor(6))
            .toStrictEqual([2, 3]);
    });
});

describe('divisors return string', () => {
    test('test1', () => {
        expect(Divisors.FindDivisor(2))
            .toStrictEqual('2 is prime');
    });
})
