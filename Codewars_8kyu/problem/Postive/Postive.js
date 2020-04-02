const sum = function (numbers) {
    let answer = 0;
    numbers.forEach(function (number) {
        answer += number;
    });
    return answer;
};

module.exports = sum;
