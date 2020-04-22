const listNumberFilter = function (list) {
    return list.filter(function (element) {
        if (typeof element !== 'number'){
            return;
        }
        return element;
    });
};

module.exports = listNumberFilter;