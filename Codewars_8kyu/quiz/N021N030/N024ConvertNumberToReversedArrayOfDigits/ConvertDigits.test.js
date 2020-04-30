const toList = require('./ConvertDigits');

test('toList(12)은 [2, 1]를 반환함',() =>{
    expect(toList(12)).toStrictEqual([2, 1]);
});

test('toList(123)은 [3, 2, 1]를 반환함',() =>{
    expect(toList(123)).toStrictEqual([3, 2, 1]);
});

test('toList(1234)은 [4, 3, 2, 1]를 반환함',() =>{
    expect(toList(1234)).toStrictEqual([4, 3, 2, 1]);
});

test('toList(12345)은 [5, 4, 3, 2, 1]를 반환함',() =>{
    expect(toList(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});

test('toList(123455)은 [5, 5, 4, 3, 2, 1]를 반환함',() =>{
    expect(toList(123455)).toStrictEqual([5, 5, 4, 3, 2, 1]);
});

test('toList(1423455)은 [5, 5, 4, 3, 2, 4, 1]를 반환함',() =>{
    expect(toList(1423455)).toStrictEqual([5, 5, 4, 3, 2, 4, 1]);
});

test('toList(14234550)은 [0, 5, 5, 4, 3, 2, 4, 1]를 반환함',() =>{
    expect(toList(14234550)).toStrictEqual([0, 5, 5, 4, 3, 2, 4, 1]);
});
