const betterThanAverage = require('./Exam');

test('betterThanAverage([2, 3], 5)은 true를 반환함', () => {
    expect(betterThanAverage([2, 3], 5)).toBe(true);
});