const xo = function (str) {
    const removeX = str.replace(/x/g, '');
    const removeO = str.replace(/o/g, '');

    return removeX.length === removeO.length;
};

module.exports = xo;