const makeUpperCase = require('./Upper');

test('makeUpperCase("hello")은 "HELLO"를 반환함',() =>{
    expect(makeUpperCase('hello')).toBe('HELLO');
});

test('makeUpperCase("hi")은 "HI"를 반환함',() =>{
    expect(makeUpperCase('hi')).toBe('HI');
});

test('makeUpperCase("my")은 "MY"를 반환함',() =>{
    expect(makeUpperCase('my')).toBe('MY');
});

test('makeUpperCase("my")은 "MY"를 반환함',() =>{
    expect(makeUpperCase('my')).toBe('MY');
});

test('makeUpperCase("")은 ""를 반환함',() =>{
    expect(makeUpperCase('')).toBe('');
});
