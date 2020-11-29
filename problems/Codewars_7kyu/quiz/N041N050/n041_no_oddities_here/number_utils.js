/**
 *
 * @param number_arr {array}
 */
const select_even = function (number_arr) {
    const isEven = num => num % 2 === 0

    return number_arr.filter(isEven);
}

module.exports = select_even;
