const greet = function (name) {
    if (name === 'Johnny'){
        return 'Hello, my love!';
    }
    return `Hello, ${name}!`;
};

module.exports = greet;
