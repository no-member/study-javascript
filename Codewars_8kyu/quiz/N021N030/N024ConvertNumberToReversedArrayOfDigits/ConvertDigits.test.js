const toList = require('./ConvertDigits');

test('toList(12)은 [2, 1]를 반환함',() =>{
    expect(toList(12)).toStrictEqual([2, 1]);
});

test('toList(123)은 [3, 2, 1]를 반환함',() =>{
    expect(toList(123)).toStrictEqual([3, 2, 1]);
});
