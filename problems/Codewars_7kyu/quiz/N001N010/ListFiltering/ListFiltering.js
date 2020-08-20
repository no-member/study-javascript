const numberFilter = function (list) {
    return list.filter(function (element) {
        return typeof element === 'number';
    });
};

module.exports = numberFilter;