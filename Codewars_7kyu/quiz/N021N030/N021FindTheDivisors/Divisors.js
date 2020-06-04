class Divisors {
    static FindDivisor(n) {
        const range2ToN = [...Array(n).keys()].filter(x => x>1)
        const divisors = range2ToN.filter(x => n%x === 0)

        return divisors;
    }
}

module.exports = Divisors;
