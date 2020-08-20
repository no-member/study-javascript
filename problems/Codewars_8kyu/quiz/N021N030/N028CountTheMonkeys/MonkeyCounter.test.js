const monkeyCount = require('./MonkeyCounter');

test('monkeyCount(2)은 [1, 2]를 반환함', () => {
    expect(monkeyCount(2)).toStrictEqual([1, 2]);
});

test('monkeyCount(4)은 [1, 2, 3, 4]를 반환함', () => {
    expect(monkeyCount(4)).toStrictEqual([1, 2, 3, 4]);
});

test('monkeyCount(6)은 [1, 2, 3, 4, 5, 6]를 반환함', () => {
    expect(monkeyCount(6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('monkeyCount(10)은 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]를 반환함', () => {
    expect(monkeyCount(10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('monkeyCount(20)은 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]를 반환함', () => {
    expect(monkeyCount(20)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
});
