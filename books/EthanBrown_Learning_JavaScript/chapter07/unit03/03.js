let irena = {
    name: 'irena',
    age: 25
}

function greet(user) {
    console.log(`Hello, ${user.name}`);
}

function getBirthYear(user) {
    console.log(new Date().getFullYear() - user.age);
}

greet(irena);
getBirthYear(irena);

