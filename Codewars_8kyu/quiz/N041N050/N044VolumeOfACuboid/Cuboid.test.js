const cuboid = require('./Cuboid');

test('cuboid(1,2,2)은 4를 반환함',() =>{
    expect(cuboid.getVolumeOfCuboid(1,2,2)).toBe(4);
});