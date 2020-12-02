/**
 *
 * @param given_number{number}
 */
const summing_a_number_digits = function (given_number) {
    const abs_number = Math.abs(given_number);
    const digits_number_list = abs_number.toString().split('').map(Number);

    return digits_number_list.reduce((a, b) => a + b, 0);
}

module.exports = summing_a_number_digits;
