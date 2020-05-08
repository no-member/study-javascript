const sumWithoutMinMax = function (numbers) {
    return numbers && numbers.length > 2 ?
        numbers.reduce((a, b) => a + b, 0) - Math.min(...numbers) - Math.max(...numbers) : 0;

    // return numbers ? numbers.sort().slice(1, -1).reduce((a, b) => a + b, 0) : 0;
};

module.exports = sumWithoutMinMax;
