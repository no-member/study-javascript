class Binary {
    static add(num1, num2) {
        return this.numToBinary(num1 + num2);
    }

    static numToBinary(num) {
        let binary = '';
        while (num > 0) {
            const remainder = num % 2;
            binary = remainder + binary;

            num = Math.floor(num / 2);
        }

        return binary;
    }
}

module.exports = Binary;
