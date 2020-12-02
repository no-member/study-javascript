/** 1부터 자기 자신까지의 값에서 나누어 떨어지는 값의 개수를 구하는 클래스 */
class NumberUtils {
  constructor(targetNumber) {
    this.targetNumber = targetNumber;
    this.targetNumberRange = [];
    this.divisorsCount = 0;
  }

  /**
   * @return {number}
   */
  getDivisorsCount = function() {
    for (let i = 0; i < this.targetNumber; i++) {
      this.targetNumberRange.push(i + 1);
    }

    for (let i = 0; i < this.targetNumber; i++) {
      if (this.targetNumber % this.targetNumberRange[i] === 0) {
        this.divisorsCount += 1;
      }
    }

    return this.divisorsCount;
  };
}

module.exports = NumberUtils;
