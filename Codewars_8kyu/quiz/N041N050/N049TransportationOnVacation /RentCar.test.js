const calculateCost = require('./RentCar');

test('calculateCost(1)은 40을 반환한다.', () => {
    expect(calculateCost(1)).toBe(40);
});