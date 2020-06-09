const RemoveSmallest = require('./RemoveSmallest');

describe('#removeSmallest normal', () => {
    test('test1', () => {
        expect(RemoveSmallest.removeSmallest([1, 2])).toStrictEqual([2]);
    });
});

