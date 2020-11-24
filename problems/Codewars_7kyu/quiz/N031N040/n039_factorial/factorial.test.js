const chai = require('chai');
const expect = chai.expect;
const factorial = require('./factorial');

describe('factorial', () => {
  context('With (1)', () => {
    it('Return 1', () => {
      expect(factorial(1)).to.equal(1);
    });
  });

  context('With (3)', () => {
    it('Return 6', () => {
      expect(factorial(3)).to.equal(6);
    });
  });

  context('With (5)', () => {
    it('Return 120', () => {
      expect(factorial(5)).to.equal(120);
    });
  });
});
