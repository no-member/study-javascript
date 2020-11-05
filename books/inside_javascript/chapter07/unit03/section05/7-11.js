function each(obj, fn, args) {
    if (obj.length === undefined) {
        for (let i in obj) {
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    } else {
        for (let i = 0; i < obj.length; i++) {
            fn.apply(obj[i], args || [i, obj[i]]);
        }
    }

    return obj;
}

var zzoon = {
    name: 'zzoon',
    age: 30,
    sex: 'Male'
};

each(zzoon, function (idx, value) {
    console.log(idx + ': ' + value);
});
