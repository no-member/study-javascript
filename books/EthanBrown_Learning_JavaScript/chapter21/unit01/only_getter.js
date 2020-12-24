class Rectangle {
  constructor(width, heigt) {
    this.width = width;
    this.heigt = heigt;
  }

  get perimeter() {
    return this.width * 2 + this.heigt * 2;
  }
}
