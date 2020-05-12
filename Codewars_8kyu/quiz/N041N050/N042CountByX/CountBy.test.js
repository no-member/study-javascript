const countBy = require('./CountBy');

test('countBy(1, 5)은 [1,2,3,4,5]를 반환함', () => {
    expect(countBy(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
});

test('countBy(1, 6)은 [1,2,3,4,5,6]를 반환함', () => {
    expect(countBy(1, 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
