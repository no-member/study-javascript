const find = require('./HighestLowest');

test("find('1 2 3')은 '3 1'을 반환한다.", () => {
    expect(find('1 2 3')).toBe('3 1')
});

test("find('3 2 1 4')은 '4 1'을 반환한다.", () => {
    expect(find('3 2 1 4')).toBe('4 1')
});
