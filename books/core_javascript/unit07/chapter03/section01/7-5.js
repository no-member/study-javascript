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
    this.width = width;
};

Square.prototype.getArea = function () {
    return this.width * this.width;
};

const sq = new Square(5);
console.log(sq.getArea());

