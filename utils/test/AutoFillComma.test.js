import { autoFillComma } from '../src/auto_fill_comma/AutoFillComma.js'
import { expect } from 'chai';

describe('autoFillComma', () => {
    context('with 1111', () => {
        it('return 1,111', () => {
            expect(autoFillComma('1111')).to.equal('1,111');
        });
    });
});
