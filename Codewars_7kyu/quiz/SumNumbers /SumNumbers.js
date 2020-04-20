const getSum = function (num1, num2) {
    return Math.floor((num1 + num2) * (Math.abs(num1 - num2) + 1) / 2);
};

module.exports = getSum;
