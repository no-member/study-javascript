const Example = require('./Example');

test('sum(1,1)은 2를 반환함', () => {
    const ex = new Example();
    expect(ex.sum(1, 1)).toBe(2);
});

test('findNextSquare(1,1)은 1를 반환함', () => {
    expect(Example.multiply(1, 1)).toBe(1);
});
