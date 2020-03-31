const boolToWord = require('./BooleanToWord');

test('boolToWord(true) is Yes', () => {
    expect(boolToWord(true)).toBe('Yes');
});
