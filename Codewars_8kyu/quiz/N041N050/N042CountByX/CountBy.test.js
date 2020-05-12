const countBy = require('./CountBy');

test('countBy(1, 5)은 [1,2,3,4,5]를 반환함', () => {
    expect(countBy(1, 5)).toBe([1, 2, 3, 4, 5]);
});