const vowelCount = require('./VowelCount');

test('vowelCount("hi") is 1', () => {
    expect(vowelCount("hi")).toBe(1);
});

test('vowelCount("ahii") is 3', () => {
    expect(vowelCount("ahii")).toBe(3);
});
