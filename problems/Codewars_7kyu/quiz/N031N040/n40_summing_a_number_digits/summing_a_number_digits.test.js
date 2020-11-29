const chai = require('chai');
const expect = chai.expect;
const summing_a_number_digits = require('./summing_a_number_digits');

describe('summing_a_number_digits', () => {
  context('With (10)', () => {
    it('Return 1', () => {
      expect(summing_a_number_digits(10)).to.equal(1);
    });
  });

  // context('With (13)', () => {
  //   it('Return 4', () => {
  //     expect(summing_a_number_digits(13)).to.equal(4);
  //   });
  // });
  //
  // context('With (-13)', () => {
  //   it('Return 4', () => {
  //     expect(summing_a_number_digits(-13)).to.equal(4);
  //   });
  // });
});
