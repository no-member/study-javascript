// jquery appendTo, insertBefore, insertAfter 메소드
const $p = $('p');

$('<sup>*</sup>').appendTo($p);
$('<hr>').insertBefore($p);
$('<br>').insertAfter($p);
