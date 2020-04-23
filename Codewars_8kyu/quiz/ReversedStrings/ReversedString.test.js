const reverseString = require('./ReversedString');

test('reverseString("hi")은 "ih" 반환함',() =>{
    expect(reverseString('hi')).toBe('ih');
});