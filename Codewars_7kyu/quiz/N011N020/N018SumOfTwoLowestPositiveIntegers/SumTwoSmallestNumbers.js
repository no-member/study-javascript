class SumTwoSmallestNumbers {
    static sumTwoSmallestNumbers(nums) {
        nums.sort(function (a, b) {
            return a - b;
        });

        return this.sumCountNumbers(2, nums);
    }

    static sumCountNumbers(count, numbers) {
        return numbers.slice(0, count).reduce((x, y) => x + y);
    }
}

module.exports = SumTwoSmallestNumbers;
