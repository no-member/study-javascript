class BreakChocolate {
    static breakChocolate(word, ending) {
        if (word === 0) {
            return 0;
        }
        return word * ending - 1;
    }
}

module.exports = BreakChocolate;
