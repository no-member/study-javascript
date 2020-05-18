const betterThanAverage = require('./Exam');

test('betterThanAverage([2, 3], 5)은 true를 반환함', () => {
    expect(betterThanAverage([2, 3], 5)).toBe(true);
});

test('betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)은 false 반환함', () => {
    expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)).toBe(false);
});
