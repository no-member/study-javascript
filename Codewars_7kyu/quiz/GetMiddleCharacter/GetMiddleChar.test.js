const getMiddle = require('./GetMiddleChar');

test('a는 a를 반환', ()=> {
  expect(getMiddle('a')).toBe('a');
});

