const summation = require('./GrassHopper');

test('summation(1)은 1를 반환함',() =>{
    expect(summation(1)).toBe(1);
});