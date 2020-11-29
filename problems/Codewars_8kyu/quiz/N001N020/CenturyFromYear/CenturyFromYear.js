/**
 * 연도를 입력 받아 세기를 반환하는 함수
 * @param {number} years
 * @return {number} century
 */
const yearToCentury = function (years) {
    return Math.ceil(years / 100);
};

module.exports = yearToCentury;
