const Square = require('./Square');

test('findNextSquare(1)은 4를 반환함', () => {
    expect(Square.findNextSquare(1)).toBe(4);
});

test('findNextSquare(4)은 9를 반환함', () => {
    expect(Square.findNextSquare(4)).toBe(9);
});
