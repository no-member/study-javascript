/** 1부터 자기 자신까지의 값에서 나누어 떨어지는 값의 개수를 구하는 클래스 */
class NumberUtils {
  /**
   * @param {number} targetNumber
   * @return {number}
   */
  static getDivisorsCount = (targetNumber) => {
    const oneToTargetNumber = Array(parseInt(targetNumber / 2))
        .fill(1).map((one, index) => one + index);

    return oneToTargetNumber
        .filter((element) => targetNumber % element === 0).length + 1;
  };
}

module.exports = NumberUtils;
