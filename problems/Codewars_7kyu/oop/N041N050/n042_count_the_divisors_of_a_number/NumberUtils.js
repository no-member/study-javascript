class NumberUtils {
    /**
     * @param targetNumber {number}
     * @return {number}
     */
    static getDivisorsCount = function (targetNumber) {
        const targetNumberRange = [];
        for (let i = 0; i < targetNumber; i++) {
            targetNumberRange.push(i + 1);
        }
        console.log(targetNumberRange);

        let divisorsCount = 0;
        for (let i = 0; i < targetNumber; i++) {
            if (targetNumber % targetNumberRange[i] === 0) {
                divisorsCount += 1;
            }
        }

        return divisorsCount;
    }
}

module.exports = NumberUtils;
