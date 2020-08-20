const MyNumberUtils = require('./MyNumberUtils')

describe('with element 2 or over', () => {
    describe('with [1, 2, 3, 4, 5]', () => {
        it('return [1, 5]', function () {
            expect(MyNumberUtils.minMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
        });
    });

    describe('with [2, 3, 4, 5]', () => {
        it('return [2, 5]', function () {
            expect(MyNumberUtils.minMax([2, 3, 4, 5])).toStrictEqual([2, 5]);
        });
    });

    describe('with [1000, 3]', () => {
        it('return [3, 1000]', function () {
            expect(MyNumberUtils.minMax([1000, 3])).toStrictEqual([3, 1000]);
        });
    });
});

describe('with element under 2', () => {
    describe('with [5]', () => {
        it('return [5, 5]', function () {
            expect(MyNumberUtils.minMax([5])).toStrictEqual([5, 5]);
        });
    });
});
