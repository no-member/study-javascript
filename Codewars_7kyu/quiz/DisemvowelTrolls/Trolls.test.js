const disemvowel = require('./Trolls');

test('test는 tst를 반환함',()=>{
    expect(disemvowel('test')).toBe('tst');
});
