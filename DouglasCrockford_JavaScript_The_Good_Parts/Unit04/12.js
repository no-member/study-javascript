Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

String.method('deentityfy', function() {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    }

    return function() {
        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}());

// String.method('deentityfy', function() {
//     var entity = {
//         quot: '"',
//         lt: '<',
//         gt: '>'
//     }
// 
//     return this.replace(/&([^&;]+);/g,
//         function (a, b) {
//             var r = entity[b];
//             return typeof r === 'string' ? r : a;
//         }
//     );
// });

console.log('&lt;&quot;&gt;'.deentityfy());
console.log(String.prototype['deentityfy'].entity);
