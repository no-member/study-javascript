const colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);
console.log('');

const colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
}
console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);
console.log('');

console.log(typeof colorsArray);
console.log(typeof colorsObj);
console.log('');

console.log(colorsArray.length);
console.log(colorsObj.length);
console.log('');

colorsArray.push('red');
colorsObj.push('red');
