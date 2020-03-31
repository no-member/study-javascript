const findSmallest = require('./FindSmallest');

test('1 + 1 is 2',() => {
    expect(1 + 1).toBe(2);
});

test('findSmallest([1,2] toBe 1', ()=>{
    expect(findSmallest([1,2])).toBe(1);
});

test('findSmallest([5, 4, 2] toBe 2', ()=>{
    expect(findSmallest([5, 4, 2])).toBe(2);
});
