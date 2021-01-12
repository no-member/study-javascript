/** 주어진 array를 sort를 하는 클래스 */
class ArrayUtils {
  /**
   * @param {array} targetArray
   * @return {array}
   */
  static mySolution = (targetArray) => {
    if (this.isEmpty(targetArray)) {
      return [];
    }

    return targetArray.sort((before, after) => {
      return before - after;
    });
  };

  /**
   * @param {array} target
   * @return {boolean}
   */
  static isEmpty = (target) => {
    if (target === '' ||
      target=== null ||
      target=== undefined) {
      return true;
    }
    return false;
  }

  /**
   * @param {array} targetArray
   * @return {array}
   */
  static otherSolution = (targetArray) => {
    return (targetArray || []).sort((before, after) => {
      return before - after;
    });
  };
}

module.exports = ArrayUtils;
