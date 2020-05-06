const areYouPlayingBanjo = function (name) {
    return name.toUpperCase().startsWith('R') ? `${name} plays banjo` : `${name} does not play banjo`;
};

module.exports = areYouPlayingBanjo;
