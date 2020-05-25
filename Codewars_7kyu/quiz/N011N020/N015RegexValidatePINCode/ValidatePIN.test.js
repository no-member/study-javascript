const ValidatePIN = require('./ValidatePIN');

test('ValidatePIN.validatePin("1234")은 true 반환함', () => {
    expect(ValidatePIN.validatePin("1234")).toBe(true);
});
