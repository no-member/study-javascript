const sum = require('./Postive');

test('sum([1])은 1를 반환함',() =>{
    expect(sum([1])).toBe(1);
});

test('sum([1, 3])은 4를 반환함',() =>{
    expect(sum([1, 3])).toBe(4);
});

test('sum([5, 0, 3])은 8를 반환함',() =>{
    expect(sum([5, 0, 3])).toBe(8);
});


