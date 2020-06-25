class Stray {
    // static find(numbers) {
    //     return numbers.find(
    //         number => numbers.indexOf(number) === numbers.lastIndexOf(number)
    //     )
    // }

    // static find(numbers) {
    //     numbers.sort();
    //     return numbers.filter(n => n === numbers[0]).length === 1 ? numbers[0] : numbers[numbers.length - 1];
    // }

    static find(numbers) {
        numbers.sort();
        if(numbers[0] !== numbers[1]) {
            return numbers[0];
        }

        return numbers[numbers.length - 1];
    }
}

module.exports = Stray;