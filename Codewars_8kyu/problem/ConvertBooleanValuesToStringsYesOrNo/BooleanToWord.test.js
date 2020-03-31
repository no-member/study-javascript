const boolToWord = require('./BooleanToWord');

test('1+1 is 2', () => {
    expect(1 + 1).toBe(2);
});

test('boolToWord(true) is Yes', () => {
    expect(boolToWord(true)).toBe('Yes');
});
