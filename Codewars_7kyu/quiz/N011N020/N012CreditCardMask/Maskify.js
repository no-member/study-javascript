class Maskify {
    static maskify(secret) {
        const visibleLength = 4;
        const secretLength = secret.length;
        const invisibleLength = secretLength - visibleLength;

        if (secretLength > visibleLength) {
            return "#".repeat(invisibleLength) + secret.slice(invisibleLength);
        }

        return secret
    }
}

module.exports = Maskify;
