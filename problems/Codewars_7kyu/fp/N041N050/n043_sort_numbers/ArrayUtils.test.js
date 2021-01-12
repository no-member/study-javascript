const chai = require('chai');
const expect = chai.expect;
const ArrayUtils = require('./ArrayUtils');

describe('ArrayUtils', () => {
  describe('$mySolution', () => {
    context('([10, -1])를 입력 받았을 경우', () => {
      it('[-1, 10]를 반환 할 것', () => {
        expect(ArrayUtils.mySolution([10, -1])).to.eql([-1, 10]);
      });
    });

    context('([1, 2, 10, 50, 5])를 입력 받았을 경우', () => {
      it('[1, 2, 5, 10, 50]를 반환 할 것', () => {
        expect(ArrayUtils.mySolution([1, 2, 10, 50, 5]))
            .to.eql([1, 2, 5, 10, 50]);
      });
    });


    context('(null)를 입력 받았을 경우', () => {
      it('[]를 반환 할 것', () => {
        expect(ArrayUtils.mySolution(null)).to.eql([]);
      });
    });
  });

  describe('$otherSolution', () => {
    context('([10, -1])를 입력 받았을 경우', () => {
      it('[-1, 10]를 반환 할 것', () => {
        expect(ArrayUtils.otherSolution([10, -1])).to.eql([-1, 10]);
      });
    });

    context('([1, 2, 10, 50, 5])를 입력 받았을 경우', () => {
      it('[1, 2, 5, 10, 50]를 반환 할 것', () => {
        expect(ArrayUtils.otherSolution([1, 2, 10, 50, 5]))
            .to.eql([1, 2, 5, 10, 50]);
      });
    });


    context('(null)를 입력 받았을 경우', () => {
      it('[]를 반환 할 것', () => {
        expect(ArrayUtils.otherSolution(null)).to.eql([]);
      });
    });
  });
});

