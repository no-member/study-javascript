import {IPerson} from './s_structuring1'

let jack: IPerson = {name: 'Jack', age: 32};
let {name, age} = jack;
console.log(name, age);
