// jquery remove 메소드
const $para = $('p');
$para.html('<i>ALL</i> PARAGRAPHS REPLACED');
$para.eq(2).html('<i>THIRD</i> PARAGRAPH REPLACED');

$para.remove();
