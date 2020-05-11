const makeUpperCase = require('./Upper');

test('makeUpperCase("hello")은 "HELLO"를 반환함',() =>{
    expect(makeUpperCase('hello')).toBe('HELLO');
});