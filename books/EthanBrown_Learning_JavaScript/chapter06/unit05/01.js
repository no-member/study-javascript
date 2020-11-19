const o = {
    name: 'Wallace',
    speak() {
        return `My name is ${this.name}!`;
    }
}

console.log(o.speak());