const reverseSeq = require('./ReverseSeq');

test('reverseSeq(2)은 [2,1]를 반환함', () => {
    expect(reverseSeq(2)).toStrictEqual([2, 1]);
});

test('reverseSeq(5)은 [5, 4, 3, 2,1]를 반환함', () => {
    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1]);
});
