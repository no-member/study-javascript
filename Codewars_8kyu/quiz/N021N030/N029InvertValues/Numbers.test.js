const invert = require('./Numbers');

test('invert([1, 2])은 [-1, -2]를 반환함',() =>{
    expect(invert([1, 2])).toBe([-1, -2]);
});