const Divisors = require('./NumberOfPeopleInTheBus');

describe('#countPassenger test => bus stop just one', () => {
    test('test1', () => {
        expect(Divisors.countPassenger([[10,0]])).toStrictEqual(10);
    });
});

