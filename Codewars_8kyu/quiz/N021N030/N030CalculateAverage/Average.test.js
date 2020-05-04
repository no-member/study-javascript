const calculate = require('./Average');

test('calculate([1,1])은 1를 반환함',() =>{
    expect(calculate([1,1])).toBe(1);
});

test('calculate([0])은 0를 반환함',() =>{
    expect(calculate([0])).toBe(0);
});
