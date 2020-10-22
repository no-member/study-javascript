const arr = ['zero', 'one', 'two'];

arr.color = 'blue';
arr.name = 'number_array';

arr[3] = 'red';

for(let prop in arr) {
    console.log(prop, arr[prop]);
}
console.log('');

for(let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}
