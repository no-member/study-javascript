const doubleInteger = require('./UnderPressure');

test('doubleInteger(2)은 4를 반환함',() =>{
    expect(doubleInteger(2)).toBe(4);
});

test('doubleInteger(10)은 20를 반환함',() =>{
    expect(doubleInteger(10)).toBe(20);
});

test('doubleInteger(104)은 208를 반환함',() =>{
    expect(doubleInteger(104)).toBe(208);
});
