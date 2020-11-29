const chai = require('chai');
const expect = chai.expect;
const selectOdd = require('./number_utils');

describe('select_odd', () => {
    context('[0, 1, 2]를 입력 받았을 경우', () => {
        it('Return [0, 2]를 반환 할 것', () => {
            expect(selectOdd([0, 1, 2])).to.eql([0, 2]);
        });
    });
});
