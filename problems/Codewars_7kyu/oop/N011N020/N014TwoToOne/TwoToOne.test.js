const TwoToOne = require('./TwoToOne');

test('TwoToOne.longest("aretheyhere","yestheyarehere")은 "aehrsty"를 반환함', () => {
  expect(TwoToOne.longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
});

test('TwoToOne.longest("loopingisfunbutdangerous","lessdangerousthancoding")은 "abcdefghilnoprstu"를 반환함', () => {
  expect(TwoToOne.longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe('abcdefghilnoprstu');
});
