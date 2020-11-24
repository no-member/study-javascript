/**
 *
 * @param digits_number{number}
 */
const summing_a_number_digits = function (digits_number) {
    const abs_number = Math.abs(digits_number);
    const digits_number_list = [...abs_number.toString()].map(parseInt);

    console.log(digits_number_list)
}

module.exports = summing_a_number_digits;
