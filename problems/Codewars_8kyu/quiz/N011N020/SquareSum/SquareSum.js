const squareSum = (numList) => {
    return numList.reduce((sum, num) => sum + (num * num), 0);
};

// const squareSum = (numList) => {
//     return numList.map(square).reduce(sum);
// };
//
// const square = (num) => {
//     return num * num;
// };
//
// const sum = (num1, num2) => {
//     return num1 + num2;
// };

module.exports = squareSum;
