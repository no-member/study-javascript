class ValidatePIN {
    static validatePin(pin) {
        return !!pin.match(/[0-9]{4}/);
    }
}

module.exports = ValidatePIN;
