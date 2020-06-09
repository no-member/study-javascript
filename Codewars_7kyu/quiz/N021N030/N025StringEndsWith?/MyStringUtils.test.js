const MyStringUtils = require('./MyStringUtils');

describe('#isEndWith return true tests', () => {
    test('test1', () => {
        expect(MyStringUtils.isEndWith('abc', 'bc')).toStrictEqual(true);
    });
});

describe('#isEndWith return false tests', () => {
    test('test1', () => {
        expect(MyStringUtils.isEndWith('abc', 'd')).toStrictEqual(false);
    });
});
