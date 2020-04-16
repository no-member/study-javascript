const descendingOrder = function (number) {
    const numberList = number.toString().split("").sort(function (a, b) {
        return b - a;
    }).join("");
    return Number(numberList);
};

module.exports = descendingOrder;
