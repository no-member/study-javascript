function change_o (o) {
    o.a = 999;
}

let o = {a: 1};
change_o(o);
console.log(o);

