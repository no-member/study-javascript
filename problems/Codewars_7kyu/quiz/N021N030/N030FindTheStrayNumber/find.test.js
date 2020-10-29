const Stray = require('./Stray');

describe('with [1, 1, 2]', () => {
  it('return 2', () => {
    expect(Stray.find([1, 1, 2])).toStrictEqual(2);
  });
});

describe('with [2, 0, 0]', () => {
  it('return 2', () => {
    expect(Stray.find([2, 0, 0])).toStrictEqual(2);
  });
});

describe('with [17, 17, 3, 17, 17, 17, 17]', () => {
  it('return 3', () => {
    expect(Stray.find([17, 17, 3, 17, 17, 17, 17])).toStrictEqual(3);
  });
});

describe('with [3, 1, 1, 1, 1, 1, 1]', () => {
  it('return 3', () => {
    expect(Stray.find([3, 1, 1, 1, 1, 1, 1])).toStrictEqual(3);
  });
});
