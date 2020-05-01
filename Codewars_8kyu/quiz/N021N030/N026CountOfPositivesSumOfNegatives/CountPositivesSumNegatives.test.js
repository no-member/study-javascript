const countPositivesSumNegatives = require('./CountPositivesSumNegatives');

test('countPositivesSumNegatives([1, 2, -1])은 [3, -1]를 반환함',() =>{
    expect(countPositivesSumNegatives([1, 2, -1])).toBe([3, -1]);
});