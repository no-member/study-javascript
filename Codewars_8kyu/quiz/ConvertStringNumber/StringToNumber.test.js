const stringToNumber = require('./StringToNumber');

test('stringToNumber("1")은 1을 반환함',() =>{
    expect(stringToNumber('1')).toBe(1);
});

test('stringToNumber("30")은 30을 반환함',() =>{
    expect(stringToNumber('30')).toBe(30);
});
