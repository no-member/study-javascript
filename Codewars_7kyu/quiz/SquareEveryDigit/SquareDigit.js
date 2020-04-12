const changeNumber = function (number) {
    let answer = "";

    while (number > 0) {
        const digitNumber = number % 10;
        answer = Math.pow(digitNumber, 2) + answer;
        number = parseInt(number / 10);
    }

    return parseInt(answer);
};

module.exports = changeNumber;
