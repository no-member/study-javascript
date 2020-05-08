const sumWithoutMinMax = function (numbers) {
    if (numbers.length <= 2) {
        return 0;
    }
    return numbers.reduce((a, b) => a + b, 0) - Math.min(...numbers) - Math.max(...numbers);
};

module.exports = sumWithoutMinMax;
