const chai = require('chai');
const expect = chai.expect;
const ArrayUtils = require('./ArrayUtils');

describe('ArrayUtils', () => {
    describe('#getDivisorsCount', () => {
        context('(2)를 입력 받았을 경우', () => {
            it('2를 반환 할 것', () => {
                const numberUtils = new ArrayUtils();
                expect(numberUtils.getDivisorsCount()).to.eql(2);
            });
        });
    });
});
