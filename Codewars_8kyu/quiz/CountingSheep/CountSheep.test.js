const countSheep = require('./CountSheep');

test('countSheep(list)은 2를 반환함',() =>{
    const list = [true, true, false ];
    expect(countSheep(list)).toBe(2);
});