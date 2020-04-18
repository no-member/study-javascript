const jadenCasting = require('./JadenCasting');

test('jadenCasting("must")는 "Must"를 반환한다.',()=>{
    expect(jadenCasting('must')).toBe('Must');
});
