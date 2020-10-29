const dnaStrand = require('./DNAStrand');

test('dnaStrand("TTTT")는 "AAAA"를 반환함', () => {
  expect(dnaStrand('TTTT')).toBe('AAAA');
});

test('dnaStrand("AAAA")는 "TTTT"를 반환함', () => {
  expect(dnaStrand('AAAA')).toBe('TTTT');
});

test('dnaStrand("CCCC")는 "GGGG"를 반환함', () => {
  expect(dnaStrand('CCCC')).toBe('GGGG');
});

test('dnaStrand("GGGG")는 "CCCC"를 반환함', () => {
  expect(dnaStrand('GGGG')).toBe('CCCC');
});

test('dnaStrand("ATTGC")는 "TAACG"를 반환함', () => {
  expect(dnaStrand('ATTGC')).toBe('TAACG');
});
