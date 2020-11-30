/**
 * 연도를 입력 받아 세기를 반환하는 함수
 * @param {number} years
 * @return {number} 세기
 */
const yearToCentury = (years) => {
    return Math.ceil(years / 100);
};

module.exports = yearToCentury;
