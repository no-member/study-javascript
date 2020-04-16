const descendingOrder = function (number) {
    const descendingStringNumber = number.toString().split('').sort(function (a, b) {
        return b - a;
    }).join('');
    return Number(descendingStringNumber);
};

module.exports = descendingOrder;
