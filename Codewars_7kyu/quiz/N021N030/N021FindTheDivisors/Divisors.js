class Divisors {
    static findDivisor(n) {
        const range2ToN = [...Array(n).keys()].filter(x => x>1)
        const divisors = range2ToN.filter(x => n%x === 0)

        if (divisors.length === 0){
            return  `${n} is prime`
        }
        return divisors;
    }
}

module.exports = Divisors;
