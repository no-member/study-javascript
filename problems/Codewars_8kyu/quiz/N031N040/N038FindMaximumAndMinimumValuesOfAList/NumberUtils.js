const isNullOrEmpty = (list) => {
    return !list || list.length === 0;
};

const max = (numbers) => {
    if (isNullOrEmpty(numbers)) {
        return 0;
    }
    return Math.max(...numbers);
};

const min = (numbers) => {
    if (isNullOrEmpty(numbers)) {
        return 0;
    }
    return Math.min(...numbers);
};

module.exports = {max, min};
