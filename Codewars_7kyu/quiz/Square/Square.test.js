const isSquare = require('./Square');

test('isSquare(1)은 true를 반환함',()=>{
    expect(isSquare(1)).toBe(true);
});

test('isSquare(2)은 false를 반환함',()=>{
    expect(isSquare(2)).toBe(false);
});
