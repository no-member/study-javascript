const repeatString = require('./StringRepeat');

test("1 is 1", () => {
    expect(1).toBe(1)
});

test("repeatString(1,'*')는 *를 반환",() => {
    expect(repeatString(1,'*')).toBe('*');
})