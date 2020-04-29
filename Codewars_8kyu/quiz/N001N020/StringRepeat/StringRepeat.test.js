const repeatString = require('./StringRepeat');

test("repeatString(2,'*')는 **를 반환",() => {
    expect(repeatString(2,'*')).toBe('**');
});

test("repeatString(5,'!')는 !!!!!를 반환",() => {
    expect(repeatString(5,'!')).toBe('!!!!!');
});

test("repeatString(3,'ha')는 hahaha를 반환",() => {
    expect(repeatString(3,'ha')).toBe('hahaha');
});

