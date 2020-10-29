class MyNumberUtils {
  static sumIsOddOrEven(arrayNumber) {
    return this.isOddOrEven(this.sum(arrayNumber));
  }

  static sum(array) {
    return array.reduce((x, y) => x + y, 0);
  }

  static isOddOrEven(number) {
    return number % 2 === 0 ? 'even' : 'odd';
  }
}


module.exports = MyNumberUtils;
