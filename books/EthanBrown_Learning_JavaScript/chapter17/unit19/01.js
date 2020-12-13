const validPassword = function(p) {
  return /[A-Z]/.test(p) &&
    /[a-z]/.test(p) &&
    /[0-9]/.test(p) &&
    !/[^a-zA-Z0-9]/.test(p);
};

console.log(validPassword("h12")); // false
console.log(validPassword("h1G2")); // true
