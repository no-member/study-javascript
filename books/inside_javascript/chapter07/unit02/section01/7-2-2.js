function multiply(arr) {
    let len = arr.length;
    let result = 1;

    for(let i = 0; i < len; i++) {
        result *= arr[i];
    }

    return result;
}

const arr = [1, 2, 3, 4];
console.log(multiply(arr));
