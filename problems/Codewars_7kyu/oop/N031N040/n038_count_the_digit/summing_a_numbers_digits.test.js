const chai = require('chai');
const expect = chai.expect;
const sumDigits = require('./summing_a_numbers_digits');

describe('sumDigits', () => {
  context('With (10)', () => {
    it('Return 1', () => {
      expect(sumDigits(10)).to.equal(1);
    });
  });

  context('With (0)', () => {
    it('Return 0', () => {
      expect(sumDigits(0)).to.equal(0);
    });
  });

  context('With (-12)', () => {
    it('Return 3', () => {
      expect(sumDigits(-12)).to.equal(3);
    });
  });
});
