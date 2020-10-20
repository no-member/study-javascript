const extendClass2 = (function() {
    const Bridge = function() {};
    return function (SuperClass, SubClass, subMethods) {
        Bridge.prototype = SubClass.prototype;
        SubClass.prototype = new Bridge();
        SubClass.prototype.constructor = SubClass;
        Bridge.prototype.constructor = SuperClass;

        if(subMethods) {
            for(let method in subMethods) {
                SubClass.prototype[method] = subMethods[method];
            }
        }

        Object.freeze(SubClass.prototype);
        return SubClass;
    };
})();
