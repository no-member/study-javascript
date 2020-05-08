const centuryFromYear = require('./CenturyFromYear');

test('centuryFromYear(1)은 1를 반환함',() =>{
    expect(centuryFromYear(1)).toBe(1);
});

test('centuryFromYear(100)은 1를 반환함',() =>{
    expect(centuryFromYear(100)).toBe(1);
});

test('centuryFromYear(101)은 2를 반환함',() =>{
    expect(centuryFromYear(100)).toBe(1);
});

test('centuryFromYear(199)은 1를 반환함',() =>{
    expect(centuryFromYear(100)).toBe(1);
});

test('centuryFromYear(200)은 2를 반환함',() =>{
    expect(centuryFromYear(100)).toBe(1);
});

test('centuryFromYear(201)은 3를 반환함',() =>{
    expect(centuryFromYear(100)).toBe(1);
});
