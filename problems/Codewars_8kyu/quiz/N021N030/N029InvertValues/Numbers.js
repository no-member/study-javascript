// const invertExcept0 = (number) => {
//     if (number !== 0) {
//         return -number;
//     }
//
//     return number;
// };

const invert = (numbers) => {
    // return numbers.map(invertExcept0);
    return numbers.map(n => n === 0 ? n : -n);
};

module.exports = invert;
