const MyNumberUtils = require('./MyNumberUtils');

describe('with (1, 9)', () => {
    it('return 8', () => {
        expect(MyNumberUtils.dontGiveMeFive(1, 9)).toStrictEqual(8);
    });
});

describe('with (5, 10)', () => {
    it('return 5', () => {
        expect(MyNumberUtils.dontGiveMeFive(5, 10)).toStrictEqual(5);
    });
});

describe('with (6, 10)', () => {
    it('return 5', () => {
        expect(MyNumberUtils.dontGiveMeFive(6, 10)).toStrictEqual(5);
    });
});

describe('with (49, 51)', () => {
    it('return 1', () => {
        expect(MyNumberUtils.dontGiveMeFive(49, 51)).toStrictEqual(1);
    });
});
