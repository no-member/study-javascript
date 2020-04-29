const isDivisible = function (number, x, y) {
    return (number % x === 0) && (number % y === 0);
};

module.exports = isDivisible;
