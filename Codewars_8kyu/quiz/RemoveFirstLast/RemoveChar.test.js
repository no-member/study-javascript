const removeChar = require('./RemoveChar');

test('remove("person")은 "erso"을 반환한다.',() =>{
    expect(removeChar('person')).toBe('erso');
});

test('remove("place")은 "lac"을 반환한다.',() =>{
    expect(removeChar('place')).toBe('lac');
});
