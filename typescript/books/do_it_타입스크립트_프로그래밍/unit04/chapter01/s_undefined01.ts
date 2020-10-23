interface INamealbe {
    name: string
};

function getName(o: INamealbe) {
    return o.name
}

let n = getName(undefined);
console.log(n);

