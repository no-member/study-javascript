const vowelCount = require('./VowelCount');

test('vowelCount("hi") is 1', () => {
    expect(vowelCount("hi")).toBe(1);
});

test('vowelCount("ahii") is 3', () => {
    expect(vowelCount("ahii")).toBe(3);
});


test('vowelCount("abracadabra") is 5', () => {
    expect(vowelCount("abracadabra")).toBe(5);
});

test('vowelCount("Abracadabra") is 5', () => {
    expect(vowelCount("Abracadabra")).toBe(5);
});
