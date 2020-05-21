class Maskify {
    static maskify(secret) {
        if (secret.length > 4) {
            return "#".repeat(secret.length - 4) + secret.slice(secret.length - 4);
        }
        return secret
    }
}

module.exports = Maskify;
