const removeChar = require('./RemoveChar');

test('remove("person")은 "erso"을 반환한다.',() =>{
    expect(removeChar('person')).toBe('erso');
});