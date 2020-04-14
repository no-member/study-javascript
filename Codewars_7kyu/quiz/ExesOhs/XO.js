const xo = function (str) {
    const removeX = str.replace(/x/gi, '');
    const removeO = str.replace(/o/gi, '');

    return removeX.length === removeO.length;
};

module.exports = xo;