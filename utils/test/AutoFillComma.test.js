import { autoFillComma } from '../src/auto_fill_comma/AutoFillComma.js'
import { expect } from 'chai';

describe('autoFillComma', () => {
    context('with 123', () => {
        it('return 123', () => {
            expect(autoFillComma('123')).to.equal('123');
        });
    });

    context('with 1234', () => {
        it('return 1,234', () => {
            expect(autoFillComma('1234')).to.equal('1,234');
        });
    });
});
