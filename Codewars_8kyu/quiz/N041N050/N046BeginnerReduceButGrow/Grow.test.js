const grow = require('./Grow');

test('grow([1, 2])은 2를 반환함',() =>{
    expect(grow([1, 2])).toBe(2);
});