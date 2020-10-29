const myNumUtils = require('./MyNumUtils');

describe('sillyAdd', () => {
  describe('with 1, 1', () => {
    it('return 2', () => {
      expect(myNumUtils.sillyAdd(1, 1)).toEqual(2);
    });
  });

  describe('with 12, 19', () => {
    it('return 211', () => {
      console.log(myNumUtils.devideDegit(12));

      expect(myNumUtils.sillyAdd(12, 19)).toEqual(211);
    });
  });
});
