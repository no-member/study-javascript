import INamealbe from './INameable'
let obj: object = {name: 'Jack'}

let name1: string = (<INamealbe>obj).name;
let name2: string = (obj as INamealbe).name;
console.log(name1, name2);

