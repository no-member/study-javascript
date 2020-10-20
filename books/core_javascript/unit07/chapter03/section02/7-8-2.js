const Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

const Square = function (width) {
    Rectangle.call(this, width, width);
};

const Bridge = function() {};
Bridge.prototype = Rectangle.prototype;
Square.prototype = new Bridge();
Object.freeze(Square.prototype);

