const Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

const rect = new Rectangle(3, 4);
console.log(rect.getArea());

const Square = function (width) {
    Rectangle.call(this, width, width);
};

Square.prototype = new Rectangle();

const sq = new Square(5);
console.dir(sq);
console.dir(sq.getArea());

