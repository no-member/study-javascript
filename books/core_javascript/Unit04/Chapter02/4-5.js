Array.prototype.map = function (callback, thisArg) {
    let mappedArr = [];
    for (let i = 0; i < this.length; i++) {
        let mappedValue = callback.call(thisArg || window, this[i], i, this);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};
