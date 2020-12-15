const highlightParas = function(containing) {
  if(typeof containing === 'string') {
    containing = new RegExp(`\\b${containing}\\b`, 'i');
  }
  const paras = document.getElementsByTagName('p');
  console.log(paras);

  for(let p of paras) {
    if(!containing.test(p.textContent)) {
      continue;
    }

    p.classList.add('highlight');
  }
};

const hightlightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of hightlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    highlightParas(a.dataset.containing);
  });
}

const removeParaHighlights = function() {
  const paras = document.querySelectorAll('p.highlight');
  for(let p of paras) {
    p.classList.remove('hightlight');
  }
};

const removeParaHighlightActions = 
  document.querySelectorAll('[data-action="removeHighlights"]');

for(let a of removeParaHighlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    removeParaHighlights();
  });
}
