const chai = require('chai');
const expect = chai.expect;
const NumberUtils = require('./NumberUtils');

describe('NumberUtils', () => {
  describe('#getDivisorsCount', () => {
    context('(2)를 입력 받았을 경우', () => {
      it('2를 반환 할 것', () => {
        expect(NumberUtils.getDivisorsCount(2)).to.eql(2);
      });
    });

    context('(500000)를 입력 받았을 경우', () => {
      it('42를 반환 할 것', () => {
        expect(NumberUtils.getDivisorsCount(500000)).to.eql(42);
      });
    });
  });
});

