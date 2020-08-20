const isObject = function (target) {
    return typeof target === 'object' && target !== null
};

const copyObjectDeep = function (target) {
    let result = {};
    if (!isObject(target)) {
        result = target;
        return result
    }

    for (var prop in target) {
        result[prop] = copyObjectDeep(target[prop]);
    }
    return result
};
