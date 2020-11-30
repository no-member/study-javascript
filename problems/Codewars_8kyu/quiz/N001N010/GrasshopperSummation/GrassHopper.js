/**
 * 등차수열의 합을 반환하는 함수
 * @param {number} num
 * @return {number} 등차수열의 합
 */
const summation = (num) => {
    if (num <= 0) {
        return num;
    }

    return num * (num + 1) / 2;
};

module.exports = summation;
