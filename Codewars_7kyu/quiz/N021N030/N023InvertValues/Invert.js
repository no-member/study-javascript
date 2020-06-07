class Invert {
    static invert(numbers) {
        return numbers.map(n => n !== 0 ? -n : n );
    }
}

module.exports = Invert;
