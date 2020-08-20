const abbreviateTwoWords = function (name) {
    return name.split(' ').map(word => word[0]).join('.').toUpperCase();
};

module.exports = abbreviateTwoWords;
