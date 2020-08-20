const jadenCasting = require('./JadenCasting');

test('jadenCasting("must")는 "Must"를 반환한다.',()=>{
    expect(jadenCasting('must')).toBe('Must');
});

test('jadenCasting("i have")는 "I Have"를 반환한다.',()=>{
    expect(jadenCasting('i have')).toBe('I Have');
});

test('jadenCasting("ma ma maaa?")는 "Ma Ma Maaa?"를 반환한다.',()=>{
    expect(jadenCasting('ma ma maaa?')).toBe('Ma Ma Maaa?');
});
