const arraySum = arr => arr.reduce((a, b) => a + b , 0);

const countPositivesSumNegatives = function (list) {
    if (list === null || list.length === 0) {
        return [];
    }
    return [list.filter(n => n > 0).length, arraySum(list.filter(n => n < 0))];
};

module.exports = countPositivesSumNegatives;
