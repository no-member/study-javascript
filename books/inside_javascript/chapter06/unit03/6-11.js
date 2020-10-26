const ArrCreate = function() {
    let arr = [1, 2, 3];

    return {
        getArr : function() {
            return arr;
        }
    };
};

const obj = ArrCreate();
const arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());
