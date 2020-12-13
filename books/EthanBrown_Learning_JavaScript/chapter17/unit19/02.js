const validPassword = function(p) {
  return /[A-Z].*[0-9][a-z]/.test(p);
};

console.log(validPassword("h12")); // false
console.log(validPassword("h1G2")); // true
console.log(validPassword("HR200a3")); // true
