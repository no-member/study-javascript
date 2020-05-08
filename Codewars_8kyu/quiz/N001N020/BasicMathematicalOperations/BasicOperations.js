const basicOperation = function (operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Invalid dividend ' + num2);
            }
            return num1 / num2;
    }
    return 0;

    // Don't use eval function
    // return eval(value1 + operation + value2);
};

module.exports = basicOperation;
