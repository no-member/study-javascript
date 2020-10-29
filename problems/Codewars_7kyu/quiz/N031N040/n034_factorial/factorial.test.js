const chai = require('chai');
const expect = chai.expect;
const Factorial = require('./factorial');


describe('factorial', () => {
  let factorial;

  before(function() {
    factorial = new Factorial();
  });

  context('With 1', () => {
    it('Retrun 1', () => {
      expect(factorial.factorial(1)).to.equal(1);
    });
  });

  context('With 3', () => {
    it('Retrun 6', () => {
      expect(factorial.factorial(3)).to.equal(6);
    });
  });
});
