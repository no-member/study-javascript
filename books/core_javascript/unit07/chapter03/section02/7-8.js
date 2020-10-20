const extendCalss1 = function (SuperClass, SubClass, subMethods) {
    SubClass.prototype = new SubClass();
    for(let prop in SubClass.prototype) {
        if(SubClass.prototype.hasOwnProperty(prop)) {
            delete SubClass.prototype[prop];
        }
    }
    if(subMethods) {
        for(let method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }
