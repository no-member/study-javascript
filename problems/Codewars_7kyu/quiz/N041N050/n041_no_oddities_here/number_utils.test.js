const chai = require('chai');
const expect = chai.expect;
const selectOdd = require('./number_utils');

describe('select_odd', () => {
    context('With ([0, 1, 2])', () => {
        it('Return [0, 2]', () => {
            expect(selectOdd([0, 1, 2])).to.eql([0, 2]);
        });
    });
});
