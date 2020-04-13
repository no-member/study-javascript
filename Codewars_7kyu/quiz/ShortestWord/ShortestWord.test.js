const countShortest = require('./ShortestWord');

test('countShortest("hi")은 2를 반환함',()=>{
    expect(countShortest('hi')).toBe(2);
});

