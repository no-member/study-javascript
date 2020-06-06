const Divisors = require('./NumberOfPeopleInTheBus');

describe('#countPassenger test => bus stop just one', () => {
    test('test1', () => {
        expect(Divisors.countPassenger([[10,0]])).toStrictEqual(10);
    });

    test('test2', () => {
        expect(Divisors.countPassenger([[3,1]])).toStrictEqual(2);
    });

    test('test3', () => {
        expect(Divisors.countPassenger([[12,12]])).toStrictEqual(0);
    });

});

describe('#countPassenger test => bus stop two bus stop', () => {
    test('test1', () => {
        expect(Divisors.countPassenger([[10,0], [9, 4]])).toStrictEqual(15);
    });

});

