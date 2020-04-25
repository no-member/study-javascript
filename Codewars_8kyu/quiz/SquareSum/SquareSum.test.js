const squareSum = require('./SquareSum');

test('squareSum([1])은 1을 반환함',() =>{
    expect(squareSum([1])).toBe(1);
});

test('squareSum([1, 3])은 10을 반환함',() =>{
    expect(squareSum([1, 3])).toBe(10);
});
