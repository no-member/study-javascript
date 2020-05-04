const calculate = require('./Average');

test('calculate([1,1])은 1를 반환함',() =>{
    expect(calculate([1,1])).toBe(1);
});