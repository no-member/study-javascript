const Square = require('./Square');

test('findNextSquare(1)은 4를 반환함', () => {
    expect(Square.findNextSquare(1)).toBe(4);
});
