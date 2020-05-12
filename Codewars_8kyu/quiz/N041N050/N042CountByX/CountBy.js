const countBy = function (interval, repeat) {
    return [...Array(repeat).keys()].map(n => (n + 1) * interval);
};

module.exports = countBy;
