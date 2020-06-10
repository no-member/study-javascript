class BreakChocolate {
    static breakChocolate(width, height) {
        // return width === 0 || height === 0 ? 0 : width * height - 1;
        return Math.max(0, width * height - 1);
    }
}

module.exports = BreakChocolate;
