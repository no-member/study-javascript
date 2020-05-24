const TwoToOne = require('./TwoToOne');

test('TwoToOne.longest("aretheyhere","yestheyarehere")은 "aehrsty"를 반환함', () => {
    expect(TwoToOne.longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
});
