const getMiddle = require('./GetMiddleChar');

test('a는 a를 반환', ()=> {
  expect(getMiddle('a')).toBe('a');
});

test('BB는 BB를 반환', ()=> {
  expect(getMiddle('BB')).toBe('BB');
});