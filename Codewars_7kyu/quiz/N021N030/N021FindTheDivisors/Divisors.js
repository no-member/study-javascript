class Divisors {
    static divisors(n) {
        const range2ToN = [...Array(n).keys()].filter(x => x>1)

        return range2ToN.filter(x => n%x === 0)
    }
}

module.exports = Divisors;
