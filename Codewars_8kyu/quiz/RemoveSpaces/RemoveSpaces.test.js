const removeSpaces = require('./RemoveSpaces');

test('removeSpaces(" Hi ")은 "Hi"를 반환함', () => {
    expect(removeSpaces(" Hi ")).toBe("Hi");
});

test('removeSpaces("Hi man")은 "Himan"를 반환함', () => {
    expect(removeSpaces("Hi man")).toBe("Himan");
});
