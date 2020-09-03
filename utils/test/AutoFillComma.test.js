import { autoFillCommaWithString, autoFillCommaWithNumber } from '../src/auto_fill_comma/AutoFillComma.js'
import { expect } from 'chai';

describe('autoFillComma', () => {
    context('with 123', () => {
        it('return 123', () => {
            expect(autoFillCommaWithString('123')).to.equal('123');
        });
    });

    context('with 1234', () => {
        it('return 1,234', () => {
            expect(autoFillCommaWithString('1234')).to.equal('1,234');
        });
    });

    context('with 123456789', () => {
        it('return 123,456,789', () => {
            expect(autoFillCommaWithString('123456789')).to.equal('123,456,789');
        });
    });
    
    context('with 12345.6789', () => {
        it('return 12,345.6789', () => {
            expect(autoFillCommaWithString('12345.6789')).to.equal('12,345.6789');
        });
    });

    context('with 12,345,6789', () => {
        it('return 123,456,789', () => {
            expect(autoFillCommaWithString('12,345,6789')).to.equal('123,456,789');
        });
    });
    
    context('with 123,456,789', () => {
        it('return 123,456,789', () => {
            expect(autoFillCommaWithString('123,456,789')).to.equal('123,456,789');
        });
    });
});

describe('autoFillCommaWithNumber', () => {
    context('with 123', () => {
        it('return 123', () => {
            expect(autoFillCommaWithNumber(123)).to.equal('123');
        });
    });

    context('with 1234', () => {
        it('return 1,234', () => {
            expect(autoFillCommaWithNumber(1234)).to.equal('1,234');
        });
    });

    context('with 123456789', () => {
        it('return 123,456,789', () => {
            expect(autoFillCommaWithNumber(123456789)).to.equal('123,456,789');
        });
    });
});
