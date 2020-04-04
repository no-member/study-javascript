const opposite = require('./Opposite');

test('opposite(1)은 -1를 반환함',() =>{
    expect(opposite(1)).toBe(-1);
});

test('opposite(3)은 -3를 반환함',() =>{
    expect(opposite(3)).toBe(-3);
});

test('opposite(0)은 0을 반환함',() =>{
    expect(opposite(0)).toBe(0);
});
