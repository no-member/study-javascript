const MyNumberUtils = require('./MyNumberUtils');

describe('triangular', () => {
    describe('with -1', () => {
        it('return -1', () => {
            expect(MyNumberUtils.triangular(-1)).toStrictEqual(0);
        });
    });

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

    describe('with 3', () => {
        it('return 6', () => {
            expect(MyNumberUtils.triangular(3)).toStrictEqual(6);
        });
    });
});
