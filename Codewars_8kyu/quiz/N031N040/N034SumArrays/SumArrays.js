const sumArrays = function (numberList) {
    if (numberList === null) {
        return 0;
    }
    return numberList.reduce((a, b) => a + b, 0);
};

module.exports = sumArrays;
