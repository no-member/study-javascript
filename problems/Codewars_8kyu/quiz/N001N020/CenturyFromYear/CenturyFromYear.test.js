const yearToCentury = require('./CenturyFromYear');

describe('#yearToCentury', () => {
    context('(1)은', () => {
        it('(1)은 1를 반환함', () => {
            expect(yearToCentury(1)).toBe(1);
        });
    });

    context('(199)은', () => {
        it('2를 반환함', () => {
            expect(yearToCentury(199)).toBe(2);
        });
    });

    context('(200)은', () => {
        it('2를 반환함', () => {
            expect(yearToCentury(200)).toBe(2);
        });
    });

    context('(201)은', () => {
        it('3를 반환함', () => {
            expect(yearToCentury(201)).toBe(3);
        });
    });
});
