const extendClass2 = (function() {
    const Bridge = function () {};
    return function (SuperClass, SubClass, subMethods) {
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        if(subMethods) {
            for(let method in subMethods) {
                SubClass.prototype[method] = subMethods[method];
            }
        }

        Object.freeze(SubClass.prototype);
        return SubClass;
    };
})();

