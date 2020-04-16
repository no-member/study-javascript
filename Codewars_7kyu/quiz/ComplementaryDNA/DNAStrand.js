const dnaStrand = function (dna) {
    let dnaList = dna.split('');
    for (let i = 0; i < dnaList.length; i++) {
        switch (dnaList[i]) {
            case 'A':
                dnaList[i] = 'T';
                break;
            case 'T':
                dnaList[i] = 'A';
                break;
        }
    }

    return dnaList.join('');
};

module.exports = dnaStrand;
