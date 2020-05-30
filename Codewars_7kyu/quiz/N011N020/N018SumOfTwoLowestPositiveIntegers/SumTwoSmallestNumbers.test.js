const SumTwoSmallestNumbers = require('./SumTwoSmallestNumbers');

test('sumTwoSmallestNumbers(5, 8, 12, 19, 22])은 "13"를 반환함', () => {
    expect(SumTwoSmallestNumbers.sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe('13');
});
