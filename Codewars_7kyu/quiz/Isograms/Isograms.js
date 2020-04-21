const isIsogram = function (word) {
    // const charList = word.toLowerCase().split('');
    // return Array.from(new Set(charList)).length === charList.length;

    return new Set(word.toUpperCase()).size === word.length;
};

module.exports = isIsogram;