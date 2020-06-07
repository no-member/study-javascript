const Invert = require('./Invert');

describe('#invert test', () => {
    test('test1', () => {
        expect(Invert.invert([1])).toStrictEqual([-1]);
    });

    test('test2', () => {
        expect(Invert.invert([1, 3, 5])).toStrictEqual([-1, -3, -5]);
    });

    test('test3', () => {
        expect(Invert.invert([1, 3, -5])).toStrictEqual([-1, -3, 5]);
    });

});

