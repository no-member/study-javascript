const monkeyCounter = function (number) {
    const answer = [];

    for (let i = 0; i < number; i++) {
       answer[i] = i + 1;
    }

    return answer;
};

module.exports = monkeyCounter;
