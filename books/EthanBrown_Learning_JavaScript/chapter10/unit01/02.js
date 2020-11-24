const u1 = {name: 'Cynthina'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

const userRoles = new Map();

userRoles
    .set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'Admin');

for (let user of userRoles.keys()) {
    console.log(user.name);
}
console.log();

for (let r of userRoles.values()) {
    console.log(r);
}
console.log();

for (let ur of userRoles.entries()) {
    console.log(`${ur[0].name} : ${ur[1]}`);
}
console.log();

for (let [u, r] of userRoles.entries()) {
    console.log(`${u.name} : ${r}`);
}
console.log();

for (let [u, r] of userRoles) {
    console.log(`${u.name} : ${r}`);
}
console.log();

console.log([...userRoles.values()]);
console.log();

userRoles.delete(u2);
console.log(userRoles.size);

userRoles.clear();
console.log(userRoles.size);
