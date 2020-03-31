const boolToWord = require('./BooleanToWord');

test('boolToWord(true) is Yes', () => {
    expect(boolToWord(true)).toBe('Yes');
});

test('boolToWord(false) is No', () => {
    expect(boolToWord(false)).toBe('No');
});
