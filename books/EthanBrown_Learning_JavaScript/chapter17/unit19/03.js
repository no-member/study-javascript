function validPassword(p) {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}

console.log(validPassword("abc"));
console.log(validPassword("abc123"));
console.log(validPassword("abc123ABC"));
console.log(validPassword("abc123ABC#"));

