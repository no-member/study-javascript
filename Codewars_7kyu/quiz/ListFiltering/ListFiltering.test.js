const listNumberFilter = require('./ListFiltering');

test('listNumberFilter([1,2])는 [1, 2]를 반환한다.', () => {
    expect(listNumberFilter([1, 2])).toStrictEqual([1, 2]);
});

test('listNumberFilter([1,2, "a"])는 [1, 2]를 반환한다.', () => {
    expect(listNumberFilter([1, 2, "a"])).toStrictEqual([1, 2]);
});

test('listNumberFilter([1, "a", "b", 0, 15])는 [1, 0, 15]를 반환한다.', () => {
    expect(listNumberFilter([1, "a", "b", 0, 15])).toStrictEqual([1, 0, 15]);
});
