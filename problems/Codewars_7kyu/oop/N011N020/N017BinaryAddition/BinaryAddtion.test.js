const Binary = require('./Binary');

test('add(1, 1)은 "10"를 반환함', () => {
  expect(Binary.add(1, 1)).toBe('10');
});

test('add(2, 1)은 "11"를 반환함', () => {
  expect(Binary.add(2, 1)).toBe('11');
});

test('add(2, 3)은 "101"를 반환함', () => {
  expect(Binary.add(2, 3)).toBe('101');
});
