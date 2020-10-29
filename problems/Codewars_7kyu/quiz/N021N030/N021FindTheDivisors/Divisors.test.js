const Divisors = require('./Divisors');

describe('divisors return array', () => {
  test('test1', () => {
    expect(Divisors.findDivisor(4))
        .toStrictEqual([2]);
  });

  test('test2', () => {
    expect(Divisors.findDivisor(6))
        .toStrictEqual([2, 3]);
  });
});

describe('divisors return string', () => {
  test('test1', () => {
    expect(Divisors.findDivisor(2))
        .toStrictEqual('2 is prime');
  });

  test('test2', () => {
    expect(Divisors.findDivisor(5))
        .toStrictEqual('5 is prime');
  });

  test('test2', () => {
    expect(Divisors.findDivisor(1))
        .toStrictEqual('1 is prime');
  });
});
