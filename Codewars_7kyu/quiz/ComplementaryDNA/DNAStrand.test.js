const dnaStrand = require('./DNAStrand');

test('dnaStrand("TTTT")는 "AAAA"를 반환함', () => {
    expect(dnaStrand("TTTT")).toBe("AAAA");
});
