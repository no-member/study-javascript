class Triangle {
    static isTriangle(a, b, c) {
        // const triangle = [a, b, c];
        //
        // const longestSide = this.findLongest(triangle);
        // const sumSideWithoutLongest = this.sumSide(triangle) - longestSide;
        //
        // return sumSideWithoutLongest > longestSide;

        return a + b > c && a + c > b && b + c > a;
    }

    // static findLongest(triangle) {
    //     return Math.max(...triangle);
    // }
    //
    // static sumSide(triangle) {
    //     return triangle.reduce((a, b) => a + b, 0);
    // }
}

module.exports = Triangle;
