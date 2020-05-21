const Maskify = require('./Maskify');

test('maskify("1")은 "1"를 반환함', () => {
    expect(Maskify.maskify("1")).toBe("1");
});
