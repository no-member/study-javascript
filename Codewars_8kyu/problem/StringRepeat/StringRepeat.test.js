const repeatString = require('./StringRepeat');

test("repeatString(1,'*')는 *를 반환",() => {
    expect(repeatString(1,'*')).toBe('*');
});

test("repeatString(2,'*')는 *를 반환",() => {
    expect(repeatString(2,'*')).toBe('**');
});
