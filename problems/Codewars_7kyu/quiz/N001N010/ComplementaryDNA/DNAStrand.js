const dnaStrand = function(dna) {
  const dnaList = dna.split('');

  for (let i = 0; i < dnaList.length; i++) {
    switch (dnaList[i]) {
      case 'A':
        dnaList[i] = 'T';
        break;
      case 'T':
        dnaList[i] = 'A';
        break;
      case 'C':
        dnaList[i] = 'G';
        break;
      case 'G':
        dnaList[i] = 'C';
        break;
    }
  }

  return dnaList.join('');
};

// const dnaStrand = function (dna) {
//     return dna.replace(/./g, function(c) {
//         return dnaStrand.pairs[c]
//     })
// };
//
// dnaStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
// };

module.exports = dnaStrand;
