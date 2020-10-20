const extendClass1 = function (SuperClass, SubClass, subMethods) {
    SubClass.prototype = new SubClass();
    for(let prop in SubClass.prototype) {
        if(SubClass.prototype.hasOwnProperty(prop)) {
            delete SubClass.prototype[prop];
        }
    }

    SubClass.prototype.constructor = SubClass;
    if(subMethods) {
        for(let method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }

    Object.freeze(SubClass.prototype);
    return SubClass;
};
