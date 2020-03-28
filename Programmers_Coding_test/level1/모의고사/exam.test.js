const solution = require('./exam');

test('[1,2,3]을 넣었을 때 [1]을 반환', () => {
    expect(solution([1,2,3])).toEqual([1]);
});

test('[2,1,2]을 넣었을 때 [2]을 반환', () => {
    expect(solution([2,1,2])).toEqual([2]);
});

test('[1,3,2,4,2]을 넣었을 때 [1,2,3]을 반환', () => {
    expect(solution([1,3,2,4,2])).toEqual([1,2,3]);
});
