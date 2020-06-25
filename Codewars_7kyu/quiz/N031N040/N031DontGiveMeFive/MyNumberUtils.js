class MyNumberUtils {
    static dontGiveMeFive(start, end) {
        let count = 0;
        for (let i = start; i <= end; i++) {
            // if (! i.toString().includes("5")) {
            //     count ++;
            // }
            if (!/5/.test(i)) {
                count ++;
            }
        }
        return count;
    }
}

module.exports = MyNumberUtils;
