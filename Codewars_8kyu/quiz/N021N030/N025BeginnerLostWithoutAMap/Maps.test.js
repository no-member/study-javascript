const doubleList = require('./Maps');

test('doubleList([1, 2])은 [2, 4]를 반환함',() =>{
    expect(doubleList([1, 2])).toStrictEqual([2, 4]);
});

test('doubleList([1, 9, 9, 12])은 [2, 18, 18, 24]를 반환함',() =>{
    expect(doubleList([1, 9, 9, 12])).toStrictEqual([2, 18, 18, 24]);
});

test('doubleList([1, 10, 0 , 3])은 [2, 20, 0, 6]를 반환함',() =>{
    expect(doubleList([1, 10, 0, 3])).toStrictEqual([2, 20, 0, 6]);
});

test('doubleList([1, 5, -2, 3])은 [2, 10, -4, 6]를 반환함',() =>{
    expect(doubleList([1, 5, -2, 3])).toStrictEqual([2, 10, -4, 6]);
});
