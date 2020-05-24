class Square {
    static findNextSquare(num) {
        return Math.pow((Math.sqrt(num) + 1), 2);
    }
}

module.exports = Square;
