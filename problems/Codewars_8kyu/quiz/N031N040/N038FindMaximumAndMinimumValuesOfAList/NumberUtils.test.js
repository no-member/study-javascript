const {max, min} = require('./NumberUtils');

describe('max 테스트', () => {
    test('max([1, 2])은 2를 반환함', () => {
        expect(max([1, 2])).toBe(2);
    });

    test('max([100, 2, 0, -10, 999])은 999를 반환함', () => {
        expect(max([100, 2, 0, -10, 999])).toBe(999);
    });

    test('max([-2, -10, -999])은 -2를 반환함', () => {
        expect(max([-2, -10, -999])).toBe(-2);
    });

    test('max([])은 0를 반환함', () => {
        expect(max([])).toBe(0);
    });

    test('max(null)은 0를 반환함', () => {
        expect(max(null)).toBe(0);
    });
});

describe('min 테스트', () => {
    test('min([1, 2])은 1를 반환함', () => {
        expect(min([1, 2])).toBe(1);
    });

    test('min([100, 2, 0, -10, 999])은 -10을 반환함', () => {
        expect(min([100, 2, 0, -10, 999])).toBe(-10);
    });

    test('min([-2, -10, -999])은 -999를 반환함', () => {
        expect(min([-2, -10, -999])).toBe(-999);
    });

    test('min([])은 0를 반환함', () => {
        expect(min([])).toBe(0);
    });

    test('min(null)은 0를 반환함', () => {
        expect(min(null)).toBe(0);
    });
});
