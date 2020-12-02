const chai = require('chai');
const expect = chai.expect;
const dnaStrand = require('./DNAStrand');

describe('DNAStrand', () => {
    describe('#dnaStrand', () => {
        context('TTTT를 입력받았을 경우', () => {
            it('AAAA를 반환한다.', () => {
                expect(dnaStrand('TTTT')).to.equal('AAAA');
            });
        });

        context('AAAA를 입력받았을 경우', () => {
            it('TTTT를 반환한다.', () => {
                expect(dnaStrand('AAAA')).to.equal('TTTT');
            });
        });

        context('CCCC를 입력받았을 경우', () => {
            it('GGGG를 반환한다.', () => {
                expect(dnaStrand('CCCC')).to.equal('GGGG');
            });
        });

        context('GGGG 입력받았을 경우', () => {
            it('CCCC를 반환한다.', () => {
                expect(dnaStrand('GGGG')).to.equal('CCCC');
            });
        });

        context('ATTGC를 입력받았을 경우', () => {
            it('TAACG를 반환한다.', () => {
                expect(dnaStrand('ATTGC')).to.equal('TAACG');
            });
        });

        context('ATGC 이외의 문자를 입력받았을 경우', () => {
            it('오류를 발생 시킨다.', () => {
                expect(() => dnaStrand('AQQQ')).to.throw(TypeError);
            });
        });
    });
});
