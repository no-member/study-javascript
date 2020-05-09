const max = function (numbers) {
    if (!numbers || numbers.length === 0) {
        return 0;
    }
    return Math.max(...numbers);
};

const min = function (numbers) {
    if (!numbers || numbers.length === 0) {
        return 0;
    }
    return Math.min(...numbers);
};

module.exports = {max, min};
