const squareSum = function (numList) {
    return numList.map(num => num * num).reduce((a, b) => a + b, 0);
};

module.exports = squareSum;
