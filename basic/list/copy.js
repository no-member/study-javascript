const arr = [10, 20, 30];
copyShallowArr = arr;
arr.push(40);

console.log(arr);
console.log(copyShallowArr);
console.log();

const arr2 = [11, 21, 31];
copyDeepArr = [...arr2];
arr2.push(41);

console.log(arr2);
console.log(copyDeepArr);
console.log();
