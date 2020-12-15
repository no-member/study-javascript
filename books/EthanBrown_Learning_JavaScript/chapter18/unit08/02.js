const removeParaHighlights = function() {
  const paras = document.querySelectorAll('p.highlight');
  for(let p of paras) {
    p.classList.remove('hightlight');
  }
};

removeParaHighlights();
