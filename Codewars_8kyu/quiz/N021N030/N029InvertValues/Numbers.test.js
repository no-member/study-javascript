const invert = require('./Numbers');

test('invert([1, 2])은 [-1, -2]를 반환함',() =>{
    expect(invert([1, 2])).toStrictEqual([-1, -2]);
});

test('invert([1, 2, 10])은 [-1, -2, -10]를 반환함',() =>{
    expect(invert([1, 2, 10])).toStrictEqual([-1, -2, -10]);
});

test('invert([1, 2, 10, -5])은 [-1, -2, -10, 5]를 반환함',() =>{
    expect(invert([1, 2, 10, -5])).toStrictEqual([-1, -2, -10, 5]);
});

test('invert([1, 2, 10, -5, -1])은 [-1, -2, -10, 5, 1]를 반환함',() =>{
    expect(invert([1, 2, 10, -5, -1])).toStrictEqual([-1, -2, -10, 5, 1]);
});

test('invert([0])은 [0]를 반환함',() =>{
    expect(invert([0])).toStrictEqual([0]);
});

test('invert([])은 []를 반환함',() =>{
    expect(invert([])).toStrictEqual([]);
});

