const arr = [10, 203, 30];
const emptyArr = [];
let varNull = null;
let varUndefined = undefined;

console.log(
!(Array.isArray(arr) && arr.length)
);

console.log(
!(Array.isArray(emptyArr) && emptyArr.length)
);

console.log(
!(Array.isArray(varNull) && varNull.length)
);

console.log(
!(Array.isArray(varUndefined) && varUndefined.length)
);

