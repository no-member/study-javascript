const sum = require('./Postive');

test('sum([1])은 1를 반환함',() =>{
    expect(sum([1])).toBe(1);
});