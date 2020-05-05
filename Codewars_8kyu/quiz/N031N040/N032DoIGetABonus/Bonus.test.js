const bonusCalculate = require('./Bonus');

test('bonusCalculate(10, false)은 £10를 반환함',() =>{
    expect(bonusCalculate(10, false)).toBe('£10');
});

test('bonusCalculate(200, false)은 £200를 반환함',() =>{
    expect(bonusCalculate(200, false)).toBe('£200');
});

test('bonusCalculate(333, false)은 £333 반환함',() =>{
    expect(bonusCalculate(333, false)).toBe('£333');
});

test('bonusCalculate(10, true)은 £100를 반환함',() =>{
    expect(bonusCalculate(10, true)).toBe('£100');
});


test('bonusCalculate(200, true)은 £2000를 반환함',() =>{
    expect(bonusCalculate(200, true)).toBe('£2000');
});

test('bonusCalculate(3330, true)은 £3330 반환함',() =>{
    expect(bonusCalculate(333, true)).toBe('£3330');
});

