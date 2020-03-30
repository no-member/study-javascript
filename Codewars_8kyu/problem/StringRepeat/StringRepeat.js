const repeatString = function(repeat, string) {
    let answer = '';
    for (let i = 0; i < repeat; i++) {
       answer += string;
    }
    return answer;
};

module.exports = repeatString;