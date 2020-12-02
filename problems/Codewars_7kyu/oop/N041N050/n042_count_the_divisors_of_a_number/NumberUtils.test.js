const chai = require('chai');
const expect = chai.expect;
const NumberUtils = require('./NumberUtils');

describe('NumberUtils', () => {
  describe('#getDivisorsCount', () => {
    context('(2)를 입력 받았을 경우', () => {
      it('2를 반환 할 것', () => {
        const numberUtils = new NumberUtils(2);
        expect(numberUtils.getDivisorsCount()).to.eql(2);
      });
    });

    context('(4)를 입력 받았을 경우', () => {
      it('3를 반환 할 것', () => {
        const numberUtils = new NumberUtils(4);
        expect(numberUtils.getDivisorsCount()).to.eql(3);
      });
    });
  });
});
