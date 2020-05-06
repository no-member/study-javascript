const sum = require('./SumArrays');

test('sum([1])은 1를 반환함', () => {
    expect(sum([1])).toBe(1);
});

test('sum([1, 3])은 4를 반환함', () => {
    expect(sum([1, 3])).toBe(4);
});

test('sum([3, 1, 10])은 14를 반환함', () => {
    expect(sum([3, 1, 10])).toBe(14);
});
