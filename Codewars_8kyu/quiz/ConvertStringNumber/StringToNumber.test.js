const stringToNumber = require('./StringToNumber');

test('stringToNumber("1")은 1을 반환함',() =>{
    expect(stringToNumber('1')).toBe(1);
});