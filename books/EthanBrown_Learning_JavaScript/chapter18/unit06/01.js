const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent);
console.log('');

console.log(para1.innerHTML);
console.log('');

para1.textContent = "Modified HTML file";
para1.innerHTML = "Modified HTML file";

