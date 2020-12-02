/**
 *
 * @param number {number}
 */
const sumDigits = (number) => {
  return toDigitsArray(toAbs(number))
      .reduce(function(accumulator, current) {
        return accumulator + current;
      });
};

/**
 * 숫자의 절댓값을 구하는 함수
 * @param number {number} 어느 숫자든 관계 없이 넣을 수  있음
 */
const toAbs = function(number) {
  return Math.abs(number);
};

/**
 *
 * @param number {number}
 */
const toDigitsArray = function(number) {
  return number.toString().split('')
      .map((stringDigit) => parseInt(stringDigit));
};

module.exports = sumDigits;
