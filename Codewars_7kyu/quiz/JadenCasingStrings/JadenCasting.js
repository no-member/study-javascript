const jadenCasting = function (sentence) {
    return sentence.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
};

module.exports = jadenCasting;