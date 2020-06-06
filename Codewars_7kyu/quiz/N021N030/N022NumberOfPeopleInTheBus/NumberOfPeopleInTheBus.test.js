const Divisors = require('./NumberOfPeopleInTheBus');

describe('#count test', () => {
    test('test1', () => {
        expect(Divisors.countPassenger([[10,0]])).toStrictEqual(10);
    });
});

