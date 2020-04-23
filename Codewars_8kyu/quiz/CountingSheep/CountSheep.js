// const countSheep = list => {
//     let counter = 0;
//
//     if (list == null) {
//         return counter;
//     }
//
//     for (const aBoolean of list) {
//         if (aBoolean) {
//             counter++;
//         }
//     }
//
//     return counter;
// };

const countSheep = list => {
    if (list == null) {
        return 0;
    }
    return list.filter(Boolean).length;
};

module.exports = countSheep;
