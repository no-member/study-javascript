const abbreviateTwoWords = require('./AbbreviateTwoWords');

test('abbreviateTwoWords("Sam Harris")은 S.H를 반환함',() =>{
    expect(abbreviateTwoWords('Sam Harris')).toBe('S.H');
});