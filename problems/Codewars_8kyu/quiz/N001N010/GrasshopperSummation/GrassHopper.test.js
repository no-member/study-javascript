const summation = require('./GrassHopper');

test('summation(1)은 1를 반환함',() =>{
    expect(summation(1)).toBe(1);
});

test('summation(3)은 6를 반환함',() =>{
    expect(summation(3)).toBe(6);
});

test('summation(10)은 55를 반환함',() =>{
    expect(summation(10)).toBe(55);
});

test('summation(0)은 0를 반환함',() =>{
    expect(summation(0)).toBe(0);
});
