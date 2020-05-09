const max = function (numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return Math.max(...numbers);
};

module.exports = max;
