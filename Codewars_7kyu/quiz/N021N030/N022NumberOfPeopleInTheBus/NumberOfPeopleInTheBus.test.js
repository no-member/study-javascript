const Divisors = require('./NumberOfPeopleInTheBus');

describe('#count test', () => {
    test('test1', () => {
        expect(Divisors.count([[10,0],[3,5],[5,8]])).toStrictEqual(5);
    });
});

