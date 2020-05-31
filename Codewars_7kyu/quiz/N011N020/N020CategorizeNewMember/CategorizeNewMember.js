class CategorizeNewMember {
    static openOrSenior(data) {
        return data.map(([years, handicap]) => (years > 54 && handicap > 7) ? 'Senior' : 'Open')
    }
}

module.exports = CategorizeNewMember;
