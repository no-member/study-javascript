const abbreviateTwoWords = function (name) {
    return name.split(' ').map(word => word[0]).join('.');
};

module.exports = abbreviateTwoWords;
