const sumArray = function (array) {
    return array.reduce((a, b) => a + b, 0);
};

const arrayPlusArray = function (array1, array2) {
    // return sumArray(array1) + sumArray(array2);
    return sumArray(array1.concat(array2));
};

module.exports = arrayPlusArray;
