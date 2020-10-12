const player = {
    name: 'Thomas',
    rank: 'Midshipman',
    age: 25
};

for(let prop in player) {
    if(!Object.prototype.call(player, prop)){
        continue;
    }
    console.log(`${prop} : ${player[prop]}`);
}
