const countSheep = function (list) {
    let counter = 0;
    for (let i = 0; i < list.length; i++) {
       if (list[i]) {
           counter++;
       }
    }
    return counter;
};

module.exports = countSheep;
