const countBy = function (interval, repeat) {
    return [...Array(repeat).keys()].map(i => i + 1);
};

module.exports = countBy;
