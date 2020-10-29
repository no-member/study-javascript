class Square {
  static findNextSquare(num) {
    const squareNumber = Math.sqrt(num);
    // return Math.floor(squareNumber) === squareNumber ? Math.pow((squareNumber + 1), 2) : -1;
    return squareNumber % 1 ? -1 : Math.pow((squareNumber + 1), 2);
  }
}

module.exports = Square;
