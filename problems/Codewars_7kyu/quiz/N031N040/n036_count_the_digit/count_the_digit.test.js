const chai = require('chai');
const expect = chai.expect;
const nbDig = require('./count_the_digit');

describe('CountTheDigit', () => {
  context('With (10, 1)', () => {
    it('Return 4', () => {
      expect(nbDig(10, 1)).to.equal(4);
    });
  });

  context('With (3, 2)', () => {
    it('Return 0', () => {
      expect(nbDig(3, 2)).to.equal(0);
    });
  });
});
