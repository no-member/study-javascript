const reverse = function (sentence) {
    if (sentence) {
        return sentence.split(' ').reverse().join(' ');
    }
    return '';
};

module.exports = reverse;
