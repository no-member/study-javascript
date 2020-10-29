const chai = require('chai');
const expect = chai.expect;

describe('mocha', () => {
  context('With bdd', () => {
    it('It respone Okay', () => {
      expect(1).to.equal(1);
    });

    it('It respone Okay', () => {
      expect(1).to.not.equal(2);
    });
  });
});
