let html = '<a class="nope" href="/yep" id="nope">Yep</a>`';

let change_html1 = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
console.log(change_html1);
console.log();

let change_html2 = html.replace(/<a .*?(class=".*?").*?(href=".*?").*>/, '<a $2  $1>');
console.log(change_html2);
console.log();
