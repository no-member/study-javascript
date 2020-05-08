const greet = function (name) {
    // if (name === 'Johnny'){
    //     return 'Hello, my love!';
    // }
    // return `Hello, ${name}!`;

   return  name === 'Johnny' ?  'Hello, my love!' : `Hello, ${name}!`;
};

module.exports = greet;
