const sentenceSmash = require('./SentenceSmash');

test('sentenceSmash(["hello"])은 "hello"를 반환함', () => {
    expect(sentenceSmash(['hello'])).toBe('hello');
});

test('sentenceSmash(["hello", "my", "friend"])은 "hello my friend"를 반환함', () => {
    expect(sentenceSmash(['hello', 'my', 'friend'])).toBe('hello my friend');
});

test('sentenceSmash([""])은 ""를 반환함', () => {
    expect(sentenceSmash([''])).toBe('');
});
