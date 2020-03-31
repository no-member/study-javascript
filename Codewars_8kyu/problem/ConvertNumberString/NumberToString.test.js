const numberToString = require('./NumberToString');

test("1 is '1'", ()=>{
    expect(numberToString(1)).toBe('1');
});

test("123 is '123'", ()=>{
    expect(numberToString(123)).toBe('123');
});
