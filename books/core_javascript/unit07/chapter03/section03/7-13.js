const extendClass3 = function(SuperClass, SubClass, subMethods) {
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    if(subMethods) {
        for(let method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }

    Object.freeze(SubClass.prototype);
    return SubClass;
};

