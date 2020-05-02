const abbreviateTwoWords = require('./AbbreviateTwoWords');

test('abbreviateTwoWords("Sam Harris")은 S.H를 반환함',() =>{
    expect(abbreviateTwoWords('Sam Harris')).toBe('S.H');
});

test('abbreviateTwoWords("sam harris")은 S.H를 반환함',() =>{
    expect(abbreviateTwoWords('sam harris')).toBe('S.H');
});

test('abbreviateTwoWords("Patrick Feenan")은 P.F를 반환함',() =>{
    expect(abbreviateTwoWords('Patrick Feenan')).toBe('P.F');
});

test('abbreviateTwoWords("Evan Cole")은 E.C를 반환함',() =>{
    expect(abbreviateTwoWords('Evan Cole')).toBe('E.C');
});

test('abbreviateTwoWords("P Favuzzi")은 P.F를 반환함',() =>{
    expect(abbreviateTwoWords('P Favuzzi')).toBe('P.F');
});

test('abbreviateTwoWords("David Mendieta")은 D.M를 반환함',() =>{
    expect(abbreviateTwoWords('David Mendieta')).toBe('D.M');
});
