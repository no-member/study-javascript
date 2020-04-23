const countSheep = list => {
    let counter = 0;

    if (list == null) {
        return counter;
    }

    for (const aBoolean of list) {
        if (aBoolean) {
            counter++;
        }
    }

    return counter;
};

module.exports = countSheep;
