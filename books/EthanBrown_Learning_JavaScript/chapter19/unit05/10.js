// jquery filter 메소드
$('p')
    .after('<hr>')
    .append('<sup>*</sup>')
    .not(':odd')
    .css('color', 'red');
