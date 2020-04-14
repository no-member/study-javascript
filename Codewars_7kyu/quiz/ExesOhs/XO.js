const xo = (str) => {
    const removeX = str.replace(/x/gi, '');
    const removeO = str.replace(/o/gi, '');

    return removeX.length === removeO.length;
};

// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

module.exports = xo;