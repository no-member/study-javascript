const arr = [1, 2];
arr.__proto__.push(3);
console.log(arr);
arr.push(3);
console.log(arr);
console.log('');

console.log(arr.__proto__.__proto__.hasOwnProperty(2));
console.log(arr.hasOwnProperty(2));
