const sumWithoutMinMax = require('./SumWithoutMinMax');

test('sumWithoutMinMax([1, 2, 3])은 2를 반환함',() =>{
    expect(sumWithoutMinMax([1, 2, 3])).toBe(2);
});