const invertExcept0 = (number) => {
    if (number !== 0) {
        return -number;
    }

    return number;
};

const invert = (numbers) => {
    return numbers.map(invertExcept0);
};

module.exports = invert;
