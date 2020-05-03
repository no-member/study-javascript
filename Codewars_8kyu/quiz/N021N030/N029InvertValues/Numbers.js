const invert = function (numbers) {
    return numbers.map(function (n) {
        if (n !== 0) {
            return -n;
        }
        return n;
    });
};

module.exports = invert;
