const part1 = {
    name: 'jane'
};

const part2 = {
    age: 22
};

const part3 = {
    city: 'Seoul',
    country: 'Kr'
};

const merged = {...part1, ...part2, ...part3}

console.log(merged);
