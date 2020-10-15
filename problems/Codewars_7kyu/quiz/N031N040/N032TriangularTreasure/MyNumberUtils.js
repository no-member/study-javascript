class MyNumberUtils {
    static triangular(num) {
        return (num > 0) ? ((num * num) + num) / 2 : 0;
    }

    // // 콜스텍의 문제로 인해서 사용 불가능으로 판정
    // static triangular(num) {
    //     if (num < 1) {
    //
    //         return 0;
    //     }
    //
    //     return num + this.triangular(num - 1)
    // }
    //
    // static triangular(num) {
    //     if (num < 1) {
    //         return 0;
    //     }
    //
    //     const rangeNum = [...Array(num + 1).keys()];
    //     const triangularNumber = this.sumArray(rangeNum);
    //
    //     return triangularNumber;
    // }
    //
    // static sumArray(arr) {
    //     return arr.reduce((a, b) => a + b, 0);
    // }
}

module.exports = MyNumberUtils;
