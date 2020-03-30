const repeatString = function(repeat, string) {
    let answer;
    if (repeat === 1){
        answer = '*';
    }
    if (repeat === 2) {
        answer = '**';
    }
    return answer;
};

module.exports = repeatString;