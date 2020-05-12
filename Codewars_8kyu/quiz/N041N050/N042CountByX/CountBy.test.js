const countBy = require('./CountBy');

test('countBy(1, 5)은 [1,2,3,4,5]를 반환함', () => {
    expect(countBy(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
});

test('countBy(2, 5)은 [2,4,6,8,10]를 반환함', () => {
    expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
});

test('countBy(3, 2)은 [3, 6]를 반환함', () => {
    expect(countBy(3, 2)).toStrictEqual([3, 6]);
});

test('countBy(1, 0)은 []를 반환함', () => {
    expect(countBy(1, 0)).toStrictEqual([]);
});

test('countBy(0, 2)은 [0, 0]를 반환함', () => {
    expect(countBy(0, 2)).toStrictEqual([0, 0]);
});
