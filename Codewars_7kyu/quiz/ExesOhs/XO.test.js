const xo = require('./XO');

test("xo('xo')는 true를 반환한다.", () => {
    expect(xo('xo')).toBe(true);
});

test("xo('xxo')는 false를 반환한다.", () => {
    expect(xo('xxo')).toBe(false);
});

test("xo('xoxo')는 true를 반환한다.", () => {
    expect(xo('xoxo')).toBe(true);
});

test("xo('Xoxo')는 true를 반환한다.", () => {
    expect(xo('Xoxo')).toBe(true);
});
