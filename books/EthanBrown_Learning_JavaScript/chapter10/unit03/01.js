const roles = new Set();
roles.add('User');
roles.add('Admin');
console.log(roles.size);
console.log();

console.log(roles.delete('Admin'));
console.log(roles);
console.log(roles.delete('Admin'));
console.log();
