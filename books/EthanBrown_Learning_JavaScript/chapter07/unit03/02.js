let user = {
    name: 'irena',
    age: 25
}

function greet() {
    console.log(`Hello, ${user.name}!`);
}

function getBirthYear() {
    return new Date().getFullYear() - user.age;
}

greet();

getBirthYear();
