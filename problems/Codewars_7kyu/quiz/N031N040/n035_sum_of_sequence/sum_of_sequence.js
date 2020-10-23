const SumOfSquence = class {
   // sequenceSum(begin, end, step) {
   //     let sum = 0;
   //     for(let i = begin; i <= end; i += step) {
   //         sum += i;
   //     }
   //     return sum;
   // }
    sequenceSum(begin, end, step) {
        if(begin > end) {
            return 0;
        }
        return begin + this.sequenceSum(begin + step, end, step);
    }
}

module.exports = SumOfSquence
