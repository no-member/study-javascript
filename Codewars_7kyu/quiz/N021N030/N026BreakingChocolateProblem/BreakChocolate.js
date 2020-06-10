class BreakChocolate {
    static breakChocolate(word, ending) {
        return word === 0 || ending === 0 ? 0 : word * ending - 1;
    }
}

module.exports = BreakChocolate;
