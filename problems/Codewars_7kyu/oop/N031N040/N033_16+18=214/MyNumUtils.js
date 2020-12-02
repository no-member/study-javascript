class MyNumUtils {
  static sillyAdd(num1, num2) {
    return num1 + num2;
  }

  static devideDegit(num) {
    const stringNum = num.toString();
    const charDegit = stringNum.split('');
    return charDegit.map(Number);
  }
}

module.exports = MyNumUtils;
