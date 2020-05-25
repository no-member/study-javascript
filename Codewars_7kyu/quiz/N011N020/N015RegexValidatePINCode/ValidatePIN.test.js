const ValidatePIN = require('./ValidatePIN');

describe('when pin contain characters return false', () => {
    test('ValidatePIN.validatePin("1234")은 true 반환함', () => {
        expect(ValidatePIN.validatePin("1234")).toBe(true);
    });
});

describe('when pass pin validate return true', () => {
    test('ValidatePIN.validatePin("123a")은 false 반환함', () => {
        expect(ValidatePIN.validatePin("123a˙")).toBe(false);
    });
});
