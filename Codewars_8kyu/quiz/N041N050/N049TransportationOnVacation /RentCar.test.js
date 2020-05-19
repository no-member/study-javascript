const calculateCost = require('./RentCar');

describe('숙박 일수가 3일 미만의 경우 테스트', () => {
    test('calculateCost(1)은 40을 반환한다.', () => {
        expect(calculateCost(1)).toBe(40);
    });

    test('calculateCost(2)은 80을 반환한다.', () => {
        expect(calculateCost(2)).toBe(80);
    });
});

describe('숙박 일수가 7일 미만의 경우 테스트', () => {
    test('calculateCost(3)은 100을 반환한다.', () => {
        expect(calculateCost(3)).toBe(100);
    });
});
