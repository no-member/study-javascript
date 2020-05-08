const sum = require('./SumArrays');

test('sum([1, 3])은 4를 반환함', () => {
    expect(sum([1, 3])).toBe(4);
});

test('sum([3, 1, 10])은 14를 반환함', () => {
    expect(sum([3, 1, 10])).toBe(14);
});

test('sum([3, 1, 10, -2])은 12를 반환함', () => {
    expect(sum([3, 1, 10, -2])).toBe(12);
});

test('sum([-3, -1, -10, 0, -2])은 -16를 반환함', () => {
    expect(sum([-3, -1, -10, 0, -2])).toBe(-16);
});

describe('예외 상황 테스트', () => {
    test('sum([])은 0를 반환함', () => {
        expect(sum([])).toBe(0);
    });

    test('sum(null)은 0를 반환함', () => {
        expect(sum(null)).toBe(0);
    });
});
