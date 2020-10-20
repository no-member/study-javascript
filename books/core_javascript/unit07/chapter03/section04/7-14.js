const extendClass = function(SuperClass, SubClass, subMethods) {
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    SubClass.prototype.super = function(propName) {
        const self = this;
        if(!propName) {
            return function() {
                SuperClass.apply(self, arguments);
            }
        }

        const prop = SuperClass.prototype[propName];
        if(typeof prop !== 'function') {
            return prop;
        }

        return function() {
            return prop.apply(self, arguments);
        }
    };

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

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

const Square = extendClass(
    Rectangle,
    function (width) {
        this.super()(width, width);
    },
    {
        getArea: function() {
            console.log(`size is : ${this.super('getArea')()}`);
        }
    }
);

const sq = new Square(10);
sq.getArea();
console.log(sq.super('getArea')());
