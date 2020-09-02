import { autoFillComma } from '../src/auto_fill_comma/AutoFillComma.js'
const chai = require('chai');

var expect = chai.expect;

describe('autoFillComma', () => {
    context('with 1111', () => {
        it('return 1,111', () => {
            expect(autoFillComma('1111')).to.equal('1,111');
        });
    });
});
