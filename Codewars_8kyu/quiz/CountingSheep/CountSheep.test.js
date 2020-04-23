const countSheep = require('./CountSheep');

test('countSheep(list)은 2를 반환함',() =>{
    const list = [true, true, false ];
    expect(countSheep(list)).toBe(2);
});

test('countSheep(list)은 3를 반환함',() =>{
    const list = [true, true, false, false, true ];
    expect(countSheep(list)).toBe(3);
});

test('countSheep(list)은 1를 반환함',() =>{
    const list = [false, true, false, false ];
    expect(countSheep(list)).toBe(1);
});
