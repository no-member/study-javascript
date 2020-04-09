const find = require('./HighestLowest');

test("find('1 2 3')은 '3 1'을 반환한다.", () => {
    expect(find('1 2 3')).toBe('3 1')
});
