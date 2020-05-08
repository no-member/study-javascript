const sumWithoutMinMax = function (numbers) {
    return numbers.reduce((a, b) => a + b, 0) - Math.min(...numbers) - Math.max(...numbers);
};

module.exports = sumWithoutMinMax;
