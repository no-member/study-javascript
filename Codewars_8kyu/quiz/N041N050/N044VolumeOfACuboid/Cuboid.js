const cuboid = (function () {
    function cuboid() {
    }

    cuboid.getVolumeOfCuboid = function (length, width, height) {
        return length * width * height;
    };

    return cuboid;
})();

module.exports = cuboid;
