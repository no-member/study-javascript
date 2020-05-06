const dnaToRna = require('./Bio');

test('dnaToRna("T")은 "U"를 반환함',() =>{
    expect(dnaToRna('T')).toBe('U');
});