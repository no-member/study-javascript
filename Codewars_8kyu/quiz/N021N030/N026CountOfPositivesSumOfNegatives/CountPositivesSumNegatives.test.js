const countPositivesSumNegatives = require('./CountPositivesSumNegatives');

test('countPositivesSumNegatives([1, 2, -1])은 [3, -1]를 반환함',() =>{
    expect(countPositivesSumNegatives([1, 2, -1])).toStrictEqual([3, -1]);
});

test('countPositivesSumNegatives([2, 1, 3, -3 -1])은 [6, -4]를 반환함',() =>{
    expect(countPositivesSumNegatives([2, 1, 3, -3, -1])).toStrictEqual([6, -4]);
});
