const countPositivesSumNegatives = require('./CountPositivesSumNegatives');

test('countPositivesSumNegatives([1, 2, -1])은 [2, -1]를 반환함', () => {
    expect(countPositivesSumNegatives([1, 2, -1])).toStrictEqual([2, -1]);
});

test('countPositivesSumNegatives([2, 1, 3, -3 -1])은 [3, -4]를 반환함', () => {
    expect(countPositivesSumNegatives([2, 1, 3, -3, -1])).toStrictEqual([3, -4]);
});

test('countPositivesSumNegatives([2, 1, 3, 0, -3 -1])은 [3, -4]를 반환함', () => {
    expect(countPositivesSumNegatives([2, 1, 3, 0, -3, -1])).toStrictEqual([3, -4]);
});

test('countPositivesSumNegatives([])은 []를 반환함', () => {
    expect(countPositivesSumNegatives([])).toStrictEqual([]);
});

test('countPositivesSumNegatives(null)은 []를 반환함', () => {
    expect(countPositivesSumNegatives(null)).toStrictEqual([]);
});
