const removeSpaces = require('./RemoveSpaces');

test('removeSpaces(" Hi ")은 "Hi"를 반환함', () => {
    expect(removeSpaces(" Hi ")).toBe("Hi");
});