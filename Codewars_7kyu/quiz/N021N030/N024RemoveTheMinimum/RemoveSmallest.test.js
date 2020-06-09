const RemoveSmallest = require('./RemoveSmallest');

describe('#removeSmallest basic tests', () => {
    test('test1', () => {
        expect(RemoveSmallest.removeSmallest([1, 2])).toStrictEqual([2]);
    });

    test('test2', () => {
        expect(RemoveSmallest.removeSmallest([1, 2, 4])).toStrictEqual([2, 4]);
    });
});

