const input = "Regex pros know the difference between\n" +
              "<i>greedy</i> and <i>lazy</i> matching.";     

console.log(input);
console.log();

console.log(input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'));
console.log();

console.log(input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'));
console.log();

console.log(input);
console.log();

