/** 1부터 자기 자신까지의 값에서 나누어 떨어지는 값의 개수를 구하는 클래스 */
class NumberUtils {
  /**
   * @param {number} targetNumber
   * @return {number}
   */
  static getDivisorsCount = function(targetNumber) {
    const targetNumberRange = [];
    for (let i = 0; i < targetNumber; i++) {
      targetNumberRange.push(i + 1);
    }
    console.log(targetNumberRange);

    let divisorsCount = 0;
    for (let i = 0; i < targetNumber; i++) {
      if (targetNumber % targetNumberRange[i] === 0) {
        divisorsCount += 1;
      }
    }

    return divisorsCount;
  };
}

module.exports = NumberUtils;
