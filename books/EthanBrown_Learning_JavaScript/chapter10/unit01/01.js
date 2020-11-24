const u1 = {name: 'Cynthina'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

const userRoles = new Map();

// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');

userRoles
    .set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'Admin');

console.log(userRoles);
console.log();

const userRoles2 = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin'],
]);

console.log(userRoles2);
console.log();

console.log(userRoles.get(u2));
console.log();

console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));
console.log();

console.log(userRoles.get(u1));
userRoles.set(u1, 'Admin');
console.log(userRoles.get(u1));
console.log();

console.log(userRoles.size);
console.log();

console.log(userRoles.keys());
console.log(userRoles.values())
