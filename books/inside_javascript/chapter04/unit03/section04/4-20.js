const self = function() {
    console.log('a');
    return function() {
        console.log('b');
    }
};

const newSelf = self();
console.log('');
newSelf();
