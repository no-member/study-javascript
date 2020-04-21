const isIsogram = function (word) {
    const charList = word.split('');

    return Array.from(new Set(charList)).length === charList.length;
};

module.exports = isIsogram;