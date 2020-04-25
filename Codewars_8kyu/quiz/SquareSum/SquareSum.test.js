const squareSum = require('./SquareSum');

test('squareSum([1])은 1을 반환함',() =>{
    expect(squareSum([1])).toBe(1);
});

test('squareSum([3, 1])은 10을 반환함',() =>{
    expect(squareSum([3, 1])).toBe(10);
});

test('squareSum([1, 3, -9])은 91을 반환함',() =>{
    expect(squareSum([1, 3, -9])).toBe(91);
});

test('squareSum([5, 3, -9])은 115를 반환함',() =>{
    expect(squareSum([5, 3, -9])).toBe(115);
});
