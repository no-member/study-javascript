let n = 0;

while(true) {
    n += 0.1;
    if (n === 0.3) {
        break;
    }
}

console.log(`Stopped at ${n}`);