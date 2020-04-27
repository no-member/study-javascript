const basicOperation = require('./BasicOperations');

test('basicOperation("+", 1, 2)은 3를 반환함',() =>{
    expect(basicOperation('+',1, 2)).toBe(3);
});

test('basicOperation("+", 3, 6)은 9를 반환함',() =>{
    expect(basicOperation('+',3, 6)).toBe(9);
});
