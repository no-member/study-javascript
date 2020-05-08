const sumWithoutMinMax = require('./SumWithoutMinMax');

test('sumWithoutMinMax([1, 2, 3])은 2를 반환함',() =>{
    expect(sumWithoutMinMax([1, 2, 3])).toBe(2);
});

test('sumWithoutMinMax([1, 2, -10, 3, 999])은 6를 반환함',() =>{
    expect(sumWithoutMinMax([1, 2, -10, 3, 999])).toBe(6);
});

test('sumWithoutMinMax([1, 999])은 0를 반환함',() =>{
    expect(sumWithoutMinMax([1, 999])).toBe(0);
});
