const BreakChocolate = require('./BreakChocolate');

describe('#breakChocolate tests', () => {
    test('test1', () => {
        expect(BreakChocolate.breakChocolate(1, 1)).toStrictEqual(0);
    });

    test('test2', () => {
        expect(BreakChocolate.breakChocolate(2, 1)).toStrictEqual(1);
    });

    test('test3', () => {
        expect(BreakChocolate.breakChocolate(5, 5)).toStrictEqual(24);
    });
});

describe('#breakChocolate exception tests', () => {
    test('test1', () => {
        expect(BreakChocolate.breakChocolate(0, 5)).toStrictEqual(0);
    });
});
