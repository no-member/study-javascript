const keepHydrated = require('./KeepHydrated');

test('keepHydrated(2)은 1를 반환함',() =>{
    expect(keepHydrated(2)).toBe(1);
});