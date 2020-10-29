const descendingOrder = require('./DescendingOrder');

test('descendingOrder(1)은 1을 반환함', ()=>{
  expect(descendingOrder(1)).toBe(1);
});

test('descendingOrder(14)은 41을 반환함', ()=>{
  expect(descendingOrder(14)).toBe(41);
});

test('descendingOrder(3450)은 5430을 반환함', ()=>{
  expect(descendingOrder(3450)).toBe(5430);
});

test('descendingOrder(17774)은 77741을 반환함', ()=>{
  expect(descendingOrder(17774)).toBe(77741);
});
