const monkeyCounter = function (number) {
    // const answer = [];
    //
    // for (let i = 0; i < number; i++) {
    //    answer.push(i + 1);
    // }
    //
    // return answer;
    
    return [...Array(number).keys()].map(n => n +1);
};

module.exports = monkeyCounter;
