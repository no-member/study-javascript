const toList = function (number) {
    // const answer = [];
    // while (number > 0){
    //     answer.push(number % 10);
    //     number = Math.floor(number / 10);
    // }
    // return answer;

    return String(number).split('').map(Number).reverse();
};

module.exports = toList;
