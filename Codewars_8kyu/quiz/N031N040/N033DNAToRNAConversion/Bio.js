const dntToRna = function (dna) {
    // return 'U'.repeat(dna.length);
    return dna.replace(/T/g, 'U')
};

module.exports = dntToRna;
