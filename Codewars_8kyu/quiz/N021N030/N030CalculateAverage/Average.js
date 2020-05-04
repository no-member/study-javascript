const calculate = function (numberList) {
    return numberList.reduce((a, b) => a + b, 0) / numberList.length;
};

module.exports = calculate;
