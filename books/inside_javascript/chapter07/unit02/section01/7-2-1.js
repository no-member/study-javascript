function sum(arr) {
    let len = arr.length;
    let i = 0;
    let sum = 0;

    for(let i = 0; i < len; i++) {
        sum += arr[i];
    }

    return sum;
}

const arr = [1, 2, 3, 4];
console.log(sum(arr));
