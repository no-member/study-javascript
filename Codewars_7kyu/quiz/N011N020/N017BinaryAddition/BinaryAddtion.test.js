const BinaryAddition = require('./BinaryAddition');

test('add(1, 1)은 "10"를 반환함', () => {
    expect(BinaryAddition.add(1, 1)).toBe('10');
});

