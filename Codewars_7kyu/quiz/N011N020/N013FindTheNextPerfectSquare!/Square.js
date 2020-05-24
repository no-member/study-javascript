class Square {
    static findNextSquare(num) {
        const squareNumber = Math.sqrt(num);
        return Math.floor(squareNumber) === squareNumber ? Math.pow((squareNumber + 1), 2) : -1;
    }
}

module.exports = Square;
