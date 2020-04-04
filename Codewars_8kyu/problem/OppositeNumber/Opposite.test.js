const opposite = require('./Opposite');

test('opposite(1)은 -1를 반환함',() =>{
    expect(opposite(1)).toBe(-1);
});