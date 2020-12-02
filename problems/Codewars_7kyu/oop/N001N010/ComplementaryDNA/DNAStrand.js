const dnaStrand = dna => {
    if (dna.match(/[^ATCG]/g)) {
        throw new TypeError('ATCG 이외의 문자는 입력 할 수 없습니다.');
    }

    return dna.replace(/./g, c => {
        return dnaPairs.get(c)
    });
};

const dnaPairs = new Map();
dnaPairs
    .set('A', 'T')
    .set('T', 'A')
    .set('C', 'G')
    .set('G', 'C');

module.exports = dnaStrand;
