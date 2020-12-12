const input = "One line\nTwo lines\nThree lines\nFour";

const beginnings = input.match(/^\w+/mg);
console.log(beginnings);

const endings = input.match(/\w+$/mg);
console.log(endings);

