const getMiddle = require('./GetMiddleChar');

test('getMiddle("a")는 "a"를 반환', ()=> {
  expect(getMiddle('a')).toBe('a');
});

test('getMiddle("BB")는 "BB"를 반환', ()=> {
  expect(getMiddle('BB')).toBe('BB');
});

test('getMiddle("HoH")는 "o"를 반환', ()=>{
  expect(getMiddle('HoH')).toBe('o');
});

test('getMiddle("test")는 "es"를 반환', ()=>{
  expect(getMiddle('test')).toBe('es');
});
