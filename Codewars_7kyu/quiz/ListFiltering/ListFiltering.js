const listNumberFilter = function (list) {
    return list.filter(function (element) {
        if (typeof element === 'number'){
            return element
        }
    });
};

module.exports = listNumberFilter;