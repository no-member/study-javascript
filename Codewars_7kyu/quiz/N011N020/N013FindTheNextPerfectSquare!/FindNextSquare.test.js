const Square = require('./Square');

describe('should return the next square for perfect squares', () => {
    test('findNextSquare(1)은 4를 반환함', () => {
        expect(Square.findNextSquare(1)).toBe(4);
    });

    test('findNextSquare(4)은 9를 반환함', () => {
        expect(Square.findNextSquare(4)).toBe(9);
    });

    test('findNextSquare(15241383936)은 15241630849를 반환함', () => {
        expect(Square.findNextSquare(15241383936)).toBe(15241630849);
    });
});

describe('should return -1 for numbers which aren\'t perfect squares"', () => {
    test('findNextSquare(2)은 -1를 반환함', () => {
        expect(Square.findNextSquare(2)).toBe(-1);
    });

    test('findNextSquare(10)은 -1를 반환함', () => {
        expect(Square.findNextSquare(10)).toBe(-1);
    });
});
