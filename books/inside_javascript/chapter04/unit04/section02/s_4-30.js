const A = function(arg) {
    // if(!(this instanceof A)) {
    if(!(this instanceof arguments.callee)) {
        return new A(arg);
    }
    this.value = arg ? arg : 0;
}

const a = new A(100);
const b = A(10);

console.log(a.value);
console.log(b.value);
console.log(global.value);
