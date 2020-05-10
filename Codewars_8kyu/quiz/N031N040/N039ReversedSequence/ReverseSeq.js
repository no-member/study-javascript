const reverseSeq = function (number) {
    return [...Array(number).keys()].map(n => n + 1).reverse();
    // return Array(number).fill(0).map((e, i) => number - i);
};

module.exports = reverseSeq;
