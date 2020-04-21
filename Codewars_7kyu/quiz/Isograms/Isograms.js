const isIsogram = function (word) {
    const charList = word.toLowerCase().split('');

    return Array.from(new Set(charList)).length === charList.length;
};

module.exports = isIsogram;