const Invert = require('./Invert');

describe('#invert test', () => {
    test('test1', () => {
        expect(Invert.invert([1])).toStrictEqual([-1]);
    });
});

