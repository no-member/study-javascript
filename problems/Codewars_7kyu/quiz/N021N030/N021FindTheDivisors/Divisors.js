class Divisors {
    static findDivisor(n) {
        const range2ToN = [...Array(n).keys()].filter(x => x>1)
        const divisors = range2ToN.filter(x => n%x === 0)

        return this.isBlank(divisors) ? `${n} is prime` : divisors;
    }

    static isBlank(array) {
        return array.length === 0;
    }
}

module.exports = Divisors;
