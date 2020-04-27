const basicOperation = function (operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
    }
    return 0;
};

module.exports = basicOperation;
