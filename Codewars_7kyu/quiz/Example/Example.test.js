const Example = require('./Example');

test('example(1,1)은 2를 반환함', () => {
    const ex = new Example();
    expect(ex.example(1, 1)).toBe(2);
});