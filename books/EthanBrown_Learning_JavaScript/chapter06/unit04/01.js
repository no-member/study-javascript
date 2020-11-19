const o = {
    name: 'Wallace',
    bark: function () {
        return 'Woof!';
    }
}

console.log(o.bark());


const es6_o = {
    name: 'Wallace',
    bark() {
        return 'Woof!';
    }
}

console.log(es6_o.bark());