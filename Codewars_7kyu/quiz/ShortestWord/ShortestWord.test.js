const countShortest = require('./ShortestWord');

test('countShortest("hi")은 2를 반환함',()=>{
    expect(countShortest('hi')).toBe(2);
});

test('countShortest("Hello friend")은 5를 반환함',()=>{
    expect(countShortest('Hello friend')).toBe(5);
});

test('countShortest("my good plan")은 2를 반환함',()=>{
    expect(countShortest('my good plan')).toBe(2);
});
