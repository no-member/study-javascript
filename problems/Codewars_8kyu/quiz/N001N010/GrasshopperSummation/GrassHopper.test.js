const summation = require('./GrassHopper');

describe('GrassHopper', () => {
    describe('#summation', () => {
        context('(1)은 ', () => {
            it('1를 반환함', () => {
                expect(summation(1)).toBe(1);
            });
        });

        context('(10)은', () => {
            test('55를 반환함', () => {
                expect(summation(10)).toBe(55);
            });
        });

        context('(0)은', () => {
            test('0를 반환함', () => {
                expect(summation(0)).toBe(0);
            });
        });
    });
});
