const accum = require('./Accum');

test('accum("a")는 "A"를 반환한다.', ()=>{
    expect(accum('a')).toBe('A');
});

test('accum("Cb")는 "CBb"를 반환한다.', ()=>{
    expect(accum('Cb')).toBe('C-Bb');
});

