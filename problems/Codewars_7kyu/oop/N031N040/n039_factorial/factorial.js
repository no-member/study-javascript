/**
 *
 * @param given_number {number}
 */
const factorial = function (given_number) {
    if (given_number < 2) {
        return 1;
    }

    return given_number * factorial(given_number - 1);
}

module.exports = factorial;
