const changeNumber = function(number) {
  let answer = '';

  while (number > 0) {
    const digitNumber = number % 10;
    answer = digitNumber * digitNumber + answer;
    number = parseInt(number / 10);
  }

  return parseInt(answer);

  // const squareList = number.toString().split('').map(function (stringDigitNumber) {
  //     const intDigitNumber = parseInt(stringDigitNumber);
  //     return intDigitNumber * intDigitNumber;
  // });
  //
  // return parseInt(squareList.join(''));
};

module.exports = changeNumber;
