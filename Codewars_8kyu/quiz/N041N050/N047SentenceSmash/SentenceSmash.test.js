const sentenceSmash = require('./SentenceSmash');

test('sentenceSmash(["hello"])은 "hello"를 반환함', () => {
    expect(sentenceSmash(["hello"])).toBe("hello");
});