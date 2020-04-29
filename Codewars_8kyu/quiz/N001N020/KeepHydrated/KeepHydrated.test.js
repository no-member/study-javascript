const litres = require('./KeepHydrated');

test('keepHydrated(2)은 1를 반환함',() =>{
    expect(litres(2)).toBe(1);
});

test('keepHydrated(1.4)은 0를 반환함',() =>{
    expect(litres(1.4)).toBe(0);
});

test('keepHydrated(12.3)은 6를 반환함',() =>{
    expect(litres(12.3)).toBe(6);
});

test('keepHydrated(11.8)은 5를 반환함',() =>{
    expect(litres(11.8)).toBe(5);
});

test('keepHydrated(1787)은 893를 반환함',() =>{
    expect(litres(1787)).toBe(893);
});
