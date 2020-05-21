const Maskify = require('./Maskify');

test('maskify("1")은 "1"를 반환함', () => {
    expect(Maskify.maskify('1')).toBe('1');
});

test('maskify("shin")은 "shin"를 반환함', () => {
    expect(Maskify.maskify('shin')).toBe('shin');
});
