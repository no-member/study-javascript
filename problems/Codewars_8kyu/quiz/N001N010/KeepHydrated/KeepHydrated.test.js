const litres = require('./KeepHydrated');

describe('KeepHydrated', () => {
    describe('#litres', () => {
        context('(2)은', () => {
            it('keepHydrated 1를 반환함', () => {
                expect(litres(2)).toBe(1);
            });
        });

        context('(1.4)은', () => {
            it('keepHydrated(1.4)은 0를 반환함', () => {
                expect(litres(1.4)).toBe(0);
            });
        });

        context('(11.8)은', () => {
            it('5를 반환함', () => {
                expect(litres(11.8)).toBe(5);
            });
        });

        context('(1787)은', () => {
            it('893를 반환함', () => {
                expect(litres(1787)).toBe(893);
            });
        });
    });
});
