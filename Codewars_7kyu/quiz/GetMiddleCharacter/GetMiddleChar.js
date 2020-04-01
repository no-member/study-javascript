const getMiddle = function (str) {
    const length = str.length;
    let answer;
    if (length % 2 === 1) {
        answer = str[Math.floor(length / 2)];
        return answer;
    }

    answer = str[length/2-1] + str[(length/2)];
    return answer;
};

module.exports = getMiddle;
