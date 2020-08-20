const grow = function (numbers) {
    return numbers.reduce((x, y) => x * y, 1);
};

module.exports = grow;
