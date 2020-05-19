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

    test('calculateCost(5)은 180을 반환한다.', () => {
        expect(calculateCost(5)).toBe(180);
    });
});

describe('숙박 일수가 7일 이상일 경우 테스트', () => {
    test('calculateCost(7)은 230을 반환한다.', () => {
        expect(calculateCost(7)).toBe(230);
    });

    test('calculateCost(8)은 270을 반환한다.', () => {
        expect(calculateCost(8)).toBe(270);
    });
});
