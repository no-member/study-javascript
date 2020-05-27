const Binary = require('./Binary');

test('add(1, 1)은 "10"를 반환함', () => {
    expect(Binary.add(1, 1)).toBe('10');
});
