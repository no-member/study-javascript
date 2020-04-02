const example = require('./Example');

test('example(1,1)은 2를 반환함',() =>{
    expect(example(1,1)).toBe(2);
});