class Stray {
    static find(numbers) {
        return numbers.find(
            number => numbers.indexOf(number) === numbers.lastIndexOf(number)
        )
    }
}

module.exports = Stray;