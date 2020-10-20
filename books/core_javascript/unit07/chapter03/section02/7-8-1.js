const extendClass1 = function (SuperClass, SubClass, subMethods) {
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

    Object.freeze(SubClass.prototype);
    return SubClass;
};

const Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

const Square = extendClass1(Rectangle, function(width) {
    Rectangle.call(this, width, width);
});

const sq = new Square(5);
console.log(sq);

