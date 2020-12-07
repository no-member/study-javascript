const html = 'HTML with <a href="/one">one link</a>, and some Javascript.' +
    '<script src = "stuff.js">';

const matches = html.match(/area|a|link|script|source/ig);

console.log(matches);

