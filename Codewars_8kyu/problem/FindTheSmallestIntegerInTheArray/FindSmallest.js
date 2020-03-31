const findSmallest = function(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    console.log(array);
    return array[0];
};

module.exports = findSmallest;
