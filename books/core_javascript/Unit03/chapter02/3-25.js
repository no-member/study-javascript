const func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
}
console.log('normal func');
func(1, 2, 3, 4);

const bindFunc1 = func.bind({ x : 1 });
console.log('bindFunc1');
bindFunc1(5, 6, 7, 8);

const bindFunc2 = func.bind({ x: 1}, 4, 5);
console.log('bindFunc2');
bindFunc2(6, 7);
bindFunc2(8, 9);

