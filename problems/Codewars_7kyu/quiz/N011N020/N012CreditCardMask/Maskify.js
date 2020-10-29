class Maskify {
  static maskify(secret) {
    const visibleLength = 4;
    // const secretLength = secret.length;
    // const invisibleLength = secretLength - visibleLength;

    // if (secretLength > visibleLength) {
    //     return "#".repeat(invisibleLength) + secret.slice(invisibleLength);
    // }
    //
    // return secret

    // return secretLength > 4 ? "#".repeat(invisibleLength) + secret.slice(invisibleLength) : secret;
    return secret.slice(0, -visibleLength).replace(/./g, '#') + secret.slice(-visibleLength);
  }
}

module.exports = Maskify;
