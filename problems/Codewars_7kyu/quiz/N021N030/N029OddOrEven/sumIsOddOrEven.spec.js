const MyNumberUtils = require('./MyNumberUtils');

describe('edge test', () => {
  describe('with []', () => {
    it('return even', function() {
      expect(MyNumberUtils.sumIsOddOrEven([])).toStrictEqual('even');
    });
  });

  describe('with [0]', () => {
    it('return even', function() {
      expect(MyNumberUtils.sumIsOddOrEven([0])).toStrictEqual('even');
    });
  });

  describe('with [1]', () => {
    it('return odd', function() {
      expect(MyNumberUtils.sumIsOddOrEven([1])).toStrictEqual('odd');
    });
  });
});

describe('even test', () => {
  describe('with [0, 1, 5]', () => {
    it('return even', function() {
      expect(MyNumberUtils.sumIsOddOrEven([0, 1, 5])).toStrictEqual('even');
    });
  });

  describe('with [0, 1, 3]', () => {
    it('return even', function() {
      expect(MyNumberUtils.sumIsOddOrEven([0, 1, 3])).toStrictEqual('even');
    });
  });
});

describe('odd test', () => {
  describe('with [0, 1, 6]', () => {
    it('return odd', function() {
      expect(MyNumberUtils.sumIsOddOrEven([0, 1, 6])).toStrictEqual('odd');
    });
  });

  describe('with [0, 1, 4]', () => {
    it('return odd', function() {
      expect(MyNumberUtils.sumIsOddOrEven([0, 1, 4])).toStrictEqual('odd');
    });
  });
});
