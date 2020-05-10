const reverseSeq = function (number) {
    return [...Array(number).keys()].map(n => n + 1).reverse();
};

module.exports = reverseSeq;
