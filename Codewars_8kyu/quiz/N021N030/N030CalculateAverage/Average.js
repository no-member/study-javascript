const calculate = function (numberList) {
    if (numberList.length === 0) {
        return 0;
    }
    return numberList.reduce((a, b) => a + b, 0) / numberList.length;
};

module.exports = calculate;
