var Person = function(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};

const qux = Person('qux', 20, 'man');
console.log(qux);

console.log(window.name);
console.log(window.age);
console.log(window.gender);
