test("1 is 1", () => {
    expect(1).toEqual(1);
});

const solution = require('./solution');

test("solution() return test", () => {
    expect(solution()).toEqual('test');
});