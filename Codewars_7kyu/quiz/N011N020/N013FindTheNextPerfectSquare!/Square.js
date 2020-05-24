class Square {
    static findNextSquare(num) {
        const squareNumber = Math.sqrt(num);
        if (Math.floor(squareNumber) === squareNumber) {
            return Math.pow((squareNumber + 1), 2);
        }
        return -1;
    }
}

module.exports = Square;
