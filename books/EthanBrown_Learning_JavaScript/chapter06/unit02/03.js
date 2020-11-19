function getGreeting() {
    console.log("Hello world!");
}

const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();
