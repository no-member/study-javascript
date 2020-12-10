const html =
  `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
  `<A href='/bar' Class="bar">Bar</a>\n` +
  `<a href="/baz">Baz</a>\n` +
  `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`;

function sanitizeATag(aTag) {
  const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);

  const attributes = parts[1].split(/\s+/);

  return '<a ' + attributes .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
          .join(' ') + '>' + parts[2] + '</a>';
}


// html.match(/<a .*?>(.*?)<\/a>/ig);

// html.replace(/<a .*?>(.*?)<\/a>/ig, function(m, g1, offset) {
//   console.log(`<a> ${m} tag found at ${offset}. contents: ${g1}`);
// });

console.log(
  html.replace(/<a .*?<\/a>/ig, function(m) {
    return sanitizeATag(m);
  })
);
console.log();

console.log(
  html.replace(/<a .*?<\/a>/ig, sanitizeATag)
);
