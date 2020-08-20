const sum = function(a, b) {
    // 실제로는 엄청 오래 걸리는 로직
    return a + b;
}

const findById = function(id) {
    return id * 10;
}

const sumNum = sum(1, 3);
const myId = findById(sumNum);
console.log(myId);

async function myLog(request, exec) {
    await exec(request);
};

console.log(myLog(sum(2, 3), findById));
