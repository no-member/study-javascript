const findSmallest = function (array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array[0];
};

module.exports = findSmallest;
