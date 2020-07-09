const MyNumberUtils = require('./MyNumberUtils');

describe('triangular', () => {
    describe('with 0', () => {
        it('return 0', () => {
            expect(MyNumberUtils.triangular(0)).toStrictEqual(0);
        });
    });

    describe('with 1', () => {
        it('return 1', () => {
            expect(MyNumberUtils.triangular(1)).toStrictEqual(1);
        });
    });
});
