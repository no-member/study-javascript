const reverseSeq = require('./ReverseSeq');

test('reverseSeq(2)은 [2,1]를 반환함', () => {
    expect(reverseSeq(2)).toBe([2, 1]);
});