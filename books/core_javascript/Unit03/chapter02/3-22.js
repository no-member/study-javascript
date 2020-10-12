const numbers = [10, 20, 3, 16, 45];
const max = min = numbers[0];
numbers.forEach(function(number) {
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
});

console.log(max, min);
