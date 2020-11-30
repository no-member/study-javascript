/**
 * 시간을 입력 받으면 탈수 증상이 일어나지 않도록 필요한 최소한의 물의 양을 반환하는 함수
 * @param {number} time
 * @return {number} 필요한 물의 양
 */
const litres = function (time) {
    return Math.floor(time / 2);
};

module.exports = litres;
