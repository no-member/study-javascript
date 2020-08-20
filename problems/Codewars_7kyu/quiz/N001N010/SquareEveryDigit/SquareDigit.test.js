const changeNumber = require('./SquareDigit');

test('changeNumber(2)는 4를 반환함', () => {
    expect(changeNumber(2)).toBe(4);
});

test('changeNumber(14)는 116를 반환함', () => {
    expect(changeNumber(14)).toBe(116);
});

test('changeNumber(234)는 4916를 반환함', () => {
    expect(changeNumber(234)).toBe(4916);
});
