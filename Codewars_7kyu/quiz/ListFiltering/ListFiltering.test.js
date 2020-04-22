const listNumberFilter = require('./ListFiltering');

test('listNumberFilter([1,2])는 [1, 2]를 반환한다.', () => {
    expect(listNumberFilter([1, 2])).toBe([1, 2]);
});

