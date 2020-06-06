const obj = {};
obj.color = 'yellow';
obj['not an identifier'] = 3;
console.log(obj['not an identifier']);
console.log(obj.color);
console.log();

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log();

console.log(obj);
console.log();

obj.SIZE = 0;
console.log(obj.SIZE);
console.log(obj['SIZE']);
console.log(obj[SIZE]);
console.log();

const sam1 = {
    name: 'Sam',
    age: 4
}

const sam2 = { name: 'Sam', age: 4 }

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinase',
        genus: 'Felis',
        species: 'catus'
    }
}

console.log(sam3.classification.family);
console.log(sam3['classification'].family);
console.log(sam3.classification['family']);
console.log(sam3['classification']['family']);
console.log('');

sam3.speak = function () {
    console.log('Meow');
};

sam3.speak();
console.log('');

delete sam3.classification;
delete sam3.speak;

