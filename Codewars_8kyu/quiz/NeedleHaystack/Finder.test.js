const findNeedleIn = require('./Finder');

test('findNeedleIn undefined 테스트',() =>{
    expect(findNeedleIn(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])).toBe(3);
});