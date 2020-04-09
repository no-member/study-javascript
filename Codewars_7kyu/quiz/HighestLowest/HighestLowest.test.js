const find = require('./HighestLowest');

test("find('3 2 1 4')은 '4 1'을 반환한다.", () => {
    expect(find('3 2 1 4')).toBe('4 1')
});

test("find('3 22 100 5')은 '100 3'을 반환한다.", () => {
    expect(find('3 22 100 5')).toBe('100 3')
});

test("find('3 124 23 210 0')은 '210 0'을 반환한다.", () => {
    expect(find('3 124 23 210 0')).toBe('210 0')
});

test("find('-3123 22 -12 0 244')은 '244 -3123'을 반환한다.", () => {
    expect(find('-3123 22 -12 0 244')).toBe('244 -3123')
});
