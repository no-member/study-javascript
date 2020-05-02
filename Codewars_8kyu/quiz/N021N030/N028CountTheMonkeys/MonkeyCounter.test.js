const monkeyCount = require('./MonkeyCounter');

test('monkeyCount(2)은 [1, 2]를 반환함',() =>{
    expect(monkeyCount(2)).toStrictEqual([1, 2]);
});