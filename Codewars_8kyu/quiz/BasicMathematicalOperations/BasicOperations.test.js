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

test('basicOperation("-", 10, 6)은 4를 반환함',() =>{
    expect(basicOperation('-',10, 6)).toBe(4);
});

test('basicOperation("-", 2, 6)은 -4를 반환함',() =>{
    expect(basicOperation('-',2, 6)).toBe(-4);
});

test('basicOperation("-", 10, -6)은 16를 반환함',() =>{
    expect(basicOperation('-',10, -6)).toBe(16);
});

test('basicOperation("-", 10, 0)은 10을 반환함',() =>{
    expect(basicOperation('-',10, 0)).toBe(10);
});

test('basicOperation("*", 2, 12)은 24을 반환함',() =>{
    expect(basicOperation('*',2, 12)).toBe(24);
});

test('basicOperation("*", 10, 23)은 230 반환함',() =>{
    expect(basicOperation('*',10, 23)).toBe(230);
});

test('basicOperation("*", 2, -2)은 -4 반환함',() =>{
    expect(basicOperation('*',2, -2)).toBe(-4);
});

test('basicOperation("*", 0, 2)은 0 반환함',() =>{
    expect(basicOperation('*',0, 2)).toBe(0);
});
