const invert = require('./Numbers');

test('invert([1, 2])은 [-1, -2]를 반환함',() =>{
    expect(invert([1, 2])).toStrictEqual([-1, -2]);
});

test('invert([1, 2, 10])은 [-1, -2, -10]를 반환함',() =>{
    expect(invert([1, 2, 10])).toStrictEqual([-1, -2, -10]);
});
