var isObject = function (target) {
    return typeof target === 'object' && target !== null
};

var copyObjectDeep = function (target) {
    var result = {};
    if (!isObject(target)) {
        result = target;
        return result
    }

    for (var prop in target) {
        result[prop] = copyObjectDeep(target[prop]);
    }
    return result
};

var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);
