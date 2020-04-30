const doubleList = require('./Maps');

test('doubleList([1, 2])은 [2, 4]를 반환함',() =>{
    expect(doubleList([1, 2])).toBe([2, 4]);
});