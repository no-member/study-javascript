const MyStringUtils = require('./MyStringUtils');

describe('#isEndWith return true tests', () => {
  test('test1', () => {
    expect(MyStringUtils.isEndWith('abc', 'bc')).toStrictEqual(true);
  });

  test('test2', () => {
    expect(MyStringUtils.isEndWith('abc123', 'c123')).toStrictEqual(true);
  });
});

describe('#isEndWith return false tests', () => {
  test('test1', () => {
    expect(MyStringUtils.isEndWith('abc', 'd')).toStrictEqual(false);
  });

  test('test2', () => {
    expect(MyStringUtils.isEndWith('abc123', 'c')).toStrictEqual(false);
  });
});
