const findSmallest = require('./FindSmallest');

test('findSmallest([1,2] toBe 1', () => {
    expect(findSmallest([1, 2])).toBe(1);
});

test('findSmallest([5, 4, 2] toBe 2', () => {
    expect(findSmallest([5, 4, 2])).toBe(2);
});

test('findSmallest([78,56,232,12,8]) toBe 8', () => {
    expect(findSmallest([78, 56, 232, 12, 8])).toBe(8);
});

test('findSmallest([34, -345, -1, 100]) toBe -345', () => {
    expect(findSmallest([34, -345, -1, 100])).toBe(-345);
});