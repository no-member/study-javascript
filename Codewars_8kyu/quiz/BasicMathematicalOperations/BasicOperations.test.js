const basicOperation = require('./BasicOperations');

test('basicOperation("+", 1, 2)은 3를 반환함',() =>{
    expect(basicOperation('+',1, 2)).toBe(3);
});

test('basicOperation("+", 3, 6)은 9를 반환함',() =>{
    expect(basicOperation('+',3, 6)).toBe(9);
});

test('basicOperation("+", 112, 20)은 132를 반환함',() =>{
    expect(basicOperation('+',112, 20)).toBe(132);
});

test('basicOperation("+", -19, 6)은 -13를 반환함',() =>{
    expect(basicOperation('+',-19, 6)).toBe(-13);
});

test('basicOperation("-", 10, 6)은 -4를 반환함',() =>{
    expect(basicOperation('-',10, 6)).toBe(4);
});


