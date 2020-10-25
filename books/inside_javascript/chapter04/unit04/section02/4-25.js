var test = 'This is test';
console.log(window.test);

const sayFoo = function() {
    console.log(this.test);
}

sayFoo();
