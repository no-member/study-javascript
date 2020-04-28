const litres = require('./KeepHydrated');

test('keepHydrated(2)은 1를 반환함',() =>{
    expect(litres(2)).toBe(1);
});