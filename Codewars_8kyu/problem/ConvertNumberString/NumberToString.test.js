const numberToString = require('./NumberToString');

test("1 is '1'", ()=>{
    expect(numberToString(1)).toBe('1');
});
