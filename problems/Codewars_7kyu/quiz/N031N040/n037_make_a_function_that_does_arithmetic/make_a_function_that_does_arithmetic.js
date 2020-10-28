// const arithmetic = function (a, b, operator) {
//     switch (operator) {
//         case 'add':
//             return a + b;
//             break;
//         case 'subtract':
//             return a - b;
//             break;
//         case 'multiply':
//             return a * b;
//             break;
//         case 'divide':
//             return a / b;
//             break;
//     }
// }

const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
}[operator]);

module.exports = arithmetic;
