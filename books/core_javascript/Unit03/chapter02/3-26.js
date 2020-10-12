const func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
};

const bindFunc = func.bind({x : 1}, 4, 5);
console.log(`func.name : ${func.name}`);
console.log(`bindFunc.name : ${bindFunc.name}`);
