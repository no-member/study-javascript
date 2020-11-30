/**
 * boolean을 입력 받아서 true일 경우 Yes, false일 경우 No를 반환한다.
 * @param {boolean} bool
 * @return {String} 'Yes' or 'No'
 */
const boolToWord = function (bool) {
    return bool ? 'Yes' : 'No';
};

module.exports = boolToWord;
