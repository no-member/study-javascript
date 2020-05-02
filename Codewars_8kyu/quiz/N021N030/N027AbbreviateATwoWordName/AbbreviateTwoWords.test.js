const abbreviateTwoWords = require('./AbbreviateTwoWords');

test('abbreviateTwoWords("Sam Harris")은 S.H를 반환함',() =>{
    expect(abbreviateTwoWords('Sam Harris')).toBe('S.H');
});

test('abbreviateTwoWords("Patrick Feenan")은 P.F를 반환함',() =>{
    expect(abbreviateTwoWords('Patrick Feenan')).toBe('P.F');
});
