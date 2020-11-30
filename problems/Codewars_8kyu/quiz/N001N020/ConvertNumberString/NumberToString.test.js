const numberToString = require('./NumberToString');

describe('NumberToString', () => {
    describe('#numberToString', () => {
        context('(1)은', () => {
            it('"1"을 반환한다.', () => {
                expect(numberToString(1)).toBe('1');
            });
        });

        context('(123)은', () => {
            it('"123"을 반환한다.', () => {
                expect(numberToString(123)).toBe('123');
            });
        });
    });
});
