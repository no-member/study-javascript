const litres = require('./KeepHydrated');

test('keepHydrated(2)은 1를 반환함',() =>{
    expect(litres(2)).toBe(1);
});

test('keepHydrated(1.4)은 0를 반환함',() =>{
    expect(litres(1.4)).toBe(0);
});
