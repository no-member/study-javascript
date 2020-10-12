const str = 'abc def';

// Array.prototype.push.call(str, ', pushed string'); // 에러 발생!

Array.prototype.concat.call(str, 'string');

Array.prototype.every.call(str, function(char) { return char !== ' '; });

Array.prototype.some.call(str, function(char) { return char === ' '; });

const newArr = Array.prototype.map.call(str, function(char) {
    return char + '!';
});

console.log(newArr);

const newStr = Array.prototype.reduce.apply(str, [
    function(string, char, i) { return string + char + i; }, ''
]);

console.log(newStr);

