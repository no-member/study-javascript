/**
 * 입력받은 숫자 string을 number형으로 변경하는 함수
 * @param {string} stringNumber
 * @return {number} 입력 받은 숫자 string을 number형으로 변환 시킨 값
 */
const stringToNumber = (stringNumber) => {
    try {
        return parseInt(stringNumber);
    } catch (error) {
        throw new TypeError("올바른 param을 입력해주세요.");
    }
};

module.exports = stringToNumber;
