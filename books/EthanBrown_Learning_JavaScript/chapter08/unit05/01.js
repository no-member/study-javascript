const arr = [5, 7, 2, 4];
const sum = arr.reduce((accumulator, element) => accumulator += element, 0);

console.log(sum);

const arr2 = [5, 7, 2, 4];
const sum2 = arr2.reduce((accumulator, element) => accumulator += element);

console.log(sum2);

