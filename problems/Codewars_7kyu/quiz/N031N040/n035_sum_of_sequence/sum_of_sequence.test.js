const chai = require('chai');
const expect = chai.expect;
const SumOfSquence = require('./sum_of_sequence');

describe('SumOfSquence', () => {
    let sum_of_squence;

    before(function() {
       sum_of_squence  = new SumOfSquence();
    });

    context('With (2, 6, 2)', () => {
        it ('Return 12', () => {
            expect(sum_of_squence.sequenceSum(2, 6, 2)).to.equal(12);
        });
    });

    context('With (1, 5, 1)', () => {
        it ('Return 15', () => {
            expect(sum_of_squence.sequenceSum(1, 5, 1)).to.equal(15);
        });
    });

    context('With (2, 2, 2)', () => {
        it ('Return 2', () => {
            expect(sum_of_squence.sequenceSum(2, 2, 2)).to.equal(2);
        });
    });
});
