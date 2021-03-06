const getSum = require('./SumNumbers');

test('getSum(1, 0)은 1을 반환한다.', () => {
  expect(getSum(1, 0)).toBe(1);
});

test('getSum(1, 3)은 6을 반환한다.', () => {
  expect(getSum(1, 3)).toBe(6);
});

test('getSum(-2, 3)은 3을 반환한다.', () => {
  expect(getSum(-2, 3)).toBe(3);
});

test('getSum(3, 3)은 3을 반환한다.', () => {
  expect(getSum(3, 3)).toBe(3);
});

test('getSum(4, -3)은 4을 반환한다.', () => {
  expect(getSum(4, -3)).toBe(4);
});
