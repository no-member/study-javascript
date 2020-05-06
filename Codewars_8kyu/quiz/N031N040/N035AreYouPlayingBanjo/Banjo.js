const areYouPlayingBanjo = function (name) {
    if (name.toUpperCase().startsWith('R')){
        return `${name} plays banjo`;
    }
    return `${name} does not play banjo`;
};

module.exports = areYouPlayingBanjo;
