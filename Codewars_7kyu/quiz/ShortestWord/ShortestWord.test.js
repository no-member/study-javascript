const countShortest = require('./ShortestWord');

test('countShortest("hi")은 2를 반환함',()=>{
    expect(countShortest('hi')).toBe(2);
});

test('countShortest("Hello friend")은 5를 반환함',()=>{
    expect(countShortest('Hello friend')).toBe(5);
});
