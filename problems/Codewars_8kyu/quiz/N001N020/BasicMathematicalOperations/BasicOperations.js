/**
 * 기본적인 계산을 해주는 함수
 * @param {string} operation - '+', '-', '*', '/' 이외를 입력 받은 경우 0을 반환
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const basicOperation = function (operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Invalid dividend ' + num2);
            }
            return num1 / num2;
        default:
            return 0;
    }
};

module.exports = basicOperation;
