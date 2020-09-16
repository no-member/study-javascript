s = 'The    quick brown fox jumps over the lazy dog.';

console.log(s.split(' '));
console.log(s.split(' ').filter(function(item){
  return item !== null && item !== undefined && item !== '';
}));
console.log(s);
