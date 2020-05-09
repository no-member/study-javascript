const isNullOrEmpty = function (list) {
    return !list || list.length === 0;
};

const max = function (numbers) {
    if (isNullOrEmpty(numbers)) {
        return 0;
    }
    return Math.max(...numbers);
};

const min = function (numbers) {
    if (isNullOrEmpty(numbers)) {
        return 0;
    }
    return Math.min(...numbers);
};

module.exports = {max, min};
