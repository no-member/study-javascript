const summation = function (num) {

    if (num <= 0){
        return num;
    }

    return num * (num + 1) / 2;

};

module.exports = summation;
