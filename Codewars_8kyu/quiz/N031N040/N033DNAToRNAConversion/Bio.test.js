const dnaToRna = require('./Bio');

test('dnaToRna("T")은 "U"를 반환함',() =>{
    expect(dnaToRna('T')).toBe('U');
});

test('dnaToRna("TT")은 "UU"를 반환함',() =>{
    expect(dnaToRna('TT')).toBe('UU');
});

test('dnaToRna("TTTT")은 "UUUU"를 반환함',() =>{
    expect(dnaToRna('TTTT')).toBe('UUUU');
});
