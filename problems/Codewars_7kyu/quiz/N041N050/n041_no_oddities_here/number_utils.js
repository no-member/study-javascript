/**
 *
 * @param number_arr {array}
 */
const select_odd = function (number_arr) {
    return number_arr.filter(x => x % 2 === 0)
}

module.exports = select_odd;
