const BreakChocolate = require('./BreakChocolate');

describe('#breakChocolate tests', () => {
    test('test1', () => {
        expect(BreakChocolate.breakChocolate(1, 1)).toStrictEqual(0);
    });
});
