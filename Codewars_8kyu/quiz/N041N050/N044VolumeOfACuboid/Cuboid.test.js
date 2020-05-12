const cuboid = require('./Cuboid');

test('cuboid(1,1)은 2를 반환함',() =>{
    expect(cuboid.getVolumeOfCuboid(1,2,2)).toBe(4);
    console.log(cuboid);
});