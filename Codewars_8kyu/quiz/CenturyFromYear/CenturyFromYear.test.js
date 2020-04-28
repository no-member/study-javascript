const centuryFromYear = require('./CenturyFromYear');

test('centuryFromYear(1)은 1를 반환함',() =>{
    expect(centuryFromYear(1)).toBe(1);
});

test('centuryFromYear(100)은 1를 반환함',() =>{
    expect(centuryFromYear(100)).toBe(1);
});
