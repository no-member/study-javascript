const getMiddle = function (str) {
    const length = str.length;
    if (length % 2 === 1) {
        str = str[Math.floor(length / 2)];
        return str;
    }
    return str;
};

module.exports = getMiddle;
