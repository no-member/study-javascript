let f;
{
    let o = {note: 'Safe'};

    f = function () {
        return o;
    }
}

let oRef = f();

console.log(f());
console.log(oRef);
console.log();

oRef.note = "Not so safe after all";
console.log(f());
console.log(oRef);
console.log();
