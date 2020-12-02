const NthSeries = require('./NthSeries');

describe('#seriseSum test', () => {
  test('test1', () => {
    expect(NthSeries.seriesSum(1)).toStrictEqual('1.00');
  });

  test('test2', () => {
    expect(NthSeries.seriesSum(2)).toStrictEqual('1.25');
  });

  test('test3', () => {
    expect(NthSeries.seriesSum(3)).toStrictEqual('1.39');
  });
});

