/**
 * 주어진 숫자 배열에서 가장 작은 숫자를 반환해라
 * @param {array} number_array
 * @return {number} 주어진 배열에서 가장 작은 숫자
 */
const findSmallest = function (number_array) {
    return Math.min(...number_array);
};

module.exports = findSmallest;
