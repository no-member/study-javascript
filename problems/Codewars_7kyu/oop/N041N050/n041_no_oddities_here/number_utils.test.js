const chai = require('chai');
const expect = chai.expect;
const selectEven = require('./number_utils');

describe('number_utils', () => {
    describe('#select_odd()', () => {
        context('[0, 1, 2]를 입력 받았을 경우', () => {
            it('Return [0, 2]를 반환 할 것', () => {
                expect(selectEven([0, 1, 2])).to.eql([0, 2]);
            });
        });

        context('[1, 3]를 입력 받았을 경우', () => {
            it('Return [](빈 배열)을 반환 할 것', () => {
                expect(selectEven([1, 3])).to.eql([]);
            });
        });

        context('[2, 2, 4, 3]를 입력 받았을 경우', () => {
            it('Return [2, 2, 4](빈 배열)을 반환 할 것', () => {
                expect(selectEven([2, 2, 4, 3])).to.eql([2, 2, 4]);
            });
        });
    });
})
