/**
 * MyNumberUtils 클래스
 * @class
 */
class MyNumberUtils {
  /**
   * start와 end 사이에 5가 들어가 있지 않는 숫자의 개수를 돌려주는 함수입니다.
   * @param start {number} 시작 범위입니다.(포함)
   * @param end {number} 끝나는 범위입니다.(포함)
   */
  static dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
      // if (! i.toString().includes("5")) {
      //     count ++;
      // }
      if (!/5/.test(i)) {
        count ++;
      }
    }
    return count;
  }
}

module.exports = MyNumberUtils;
