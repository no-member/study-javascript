const repeatString = require('./StringRepeat');

test("repeatString(1,'*')는 *를 반환",() => {
    expect(repeatString(1,'*')).toBe('*');
});