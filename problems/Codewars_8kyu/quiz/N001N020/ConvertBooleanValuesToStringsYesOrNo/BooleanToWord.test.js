const boolToWord = require('./BooleanToWord');

describe('#boolToWord', () => {
    context('(true)는', () => {
        it('"Yes"를 반환한다.', () => {
            expect(boolToWord(true)).toBe('Yes');
        });
    });

    context('(false)는', () => {
        it('"No"를 반환한다.', () => {
            expect(boolToWord(false)).toBe('No');
        });
    });
});
