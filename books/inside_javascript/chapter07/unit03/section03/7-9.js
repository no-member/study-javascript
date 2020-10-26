const print_all = function(arg) {
    for(let i in this) {
        console.log(i + " : " + this[i]);
    }

    console.log('---------------------------');

    for(let i in arguments) {
        console.log(i + " : " + arguments[i]);
    }
};

const myobj = {name : 'zzoon'};

let myfunc = print_all.bind(myobj);
myfunc();
console.log('myfunc() is over');

let myfunc1 = print_all.bind(myobj, 'iamhjoo', 'others');
myfunc1('insidejs');

