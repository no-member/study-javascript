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

    context('getDivisorsCount를 2번 이상 사용 한 경우에도', () => {
      it('동일한 값을 반환 할 것', () => {
        const numberUtils = new NumberUtils(4);
        numberUtils.getDivisorsCount();
        expect(numberUtils.getDivisorsCount()).to.eql(3);
      });
    });
  });
});
