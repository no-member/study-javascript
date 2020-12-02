const disemvowel = require('./Trolls');

test('test는 tst를 반환함', () => {
  expect(disemvowel('test')).toBe('tst');
});

test('This website is for losers LOL!는 Ths wbst s fr lsrs LL!를 반환함', () => {
  expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
});
