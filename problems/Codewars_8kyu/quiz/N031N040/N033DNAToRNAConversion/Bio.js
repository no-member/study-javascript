const dntToRna = function (dna) {
    return dna.replace(/T/g, 'U');
    // return dna.split("T").join("U");
};

module.exports = dntToRna;
