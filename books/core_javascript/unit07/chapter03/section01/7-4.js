const Grade = function() {
    const args = Array.prototype.slice.call(arguments);
    for(let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.length = args.length;
};

Grade.prototype = ['a', 'b', 'c', 'd'];
const g = new Grade(100, 80);

g.push(90);
console.log(g);

delete g.length;
g.push(70);
console.log(g);

