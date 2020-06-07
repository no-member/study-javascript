class NthSeries {
    static seriesSum(number) {
        let sum = 0;
        for (let i = 0; i < number; i++) {
            sum += Math.round((1 / (i * 3 + 1)) * 100) / 100
        }

        return sum.toFixed(2).toString();
    }
}

module.exports = NthSeries;
