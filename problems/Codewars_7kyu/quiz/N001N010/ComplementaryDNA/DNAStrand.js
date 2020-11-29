const dnaStrand = dna => {
    if (dna.match(/[^ATCG]/g)) {
        throw new TypeError('ATCG 이외의 문자는 입력 할 수 없습니다.');
    }

    return dna.replace(/./g, c => {
        return dnaStrand.pairs[c]
    });
};

dnaStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
};

module.exports = dnaStrand;
