Array.prototype.map = function (callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
        var that = this;
        if(thisArg) {
            that = thisArg;
        }
        var mappedValue = callback.call(that, that[i], i, that);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};

[20, 2].map(function(value) { return value + 2; });

[20, 2].map(function(value) { return value + 2; }, [40, 4]);
