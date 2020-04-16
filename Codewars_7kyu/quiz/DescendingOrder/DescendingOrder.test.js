const descendingOrder = require('./DescendingOrder');

test('descendingOrder(1)은 1을 반환함', ()=>{
    expect(descendingOrder(1)).toBe(1);
});