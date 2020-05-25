class ValidatePIN {
    static validatePin(pin) {
        // const reg = new RegExp(/[0-9]{4}|[0-9]{6}/);
        // return reg.test(pin);

        return !!pin.match(/^[0-9]{4}$|^[0-9]{6}$/);
    }
}

module.exports = ValidatePIN;
