interface INamealbe {
    name: string
};

function getName(o: INamealbe) {
    return o != undefined ? o.name : 'unknown name'
}

let n = getName(undefined);
console.log(n);
console.log(getName({name: 'Jack'}));

