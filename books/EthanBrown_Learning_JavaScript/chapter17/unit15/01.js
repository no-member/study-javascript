let html = '<a class="nope" href="/yep">Yep</a>`';

let change_html1 = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(change_html1);
console.log();

let change_html2 = html.replace(/<a .*?(href=".*?").*>/, '<a $1>');
console.log(change_html2);
console.log();
