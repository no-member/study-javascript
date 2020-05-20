const Points = require('./Points');

test('Points.sum(["0:1", "2:3"])은 0를 반환함', () => {
    expect(Points.sum(['0:1', '2:3'])).toBe(0);
});

test('Points.sum(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])은 30를 반환함', () => {
    expect(Points.sum(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))
        .toBe(30);
});

test('Points.sum(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])은 10를 반환함', () => {
    expect(Points.sum(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))
        .toBe(10);
});