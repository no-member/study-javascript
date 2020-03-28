const solution = require('./exam');

test('test for test', () => {
    expect(solution()).toEqual('test');
});

test('', () => {
    expect(solution([1,2,3])).toEqual([1]);
});