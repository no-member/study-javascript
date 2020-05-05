const bonusCalculate = require('./Bonus');

test('bonusCalculate(10, false)은 £10를 반환함',() =>{
    expect(bonusCalculate(10, false)).toBe('£10');
});