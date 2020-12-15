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

highlightParas('unique');

const hightlightActions = document.querySelectorAll('[data-action="highlight"]');
console.log(hightlightActions[0].dataset);
console.log();

console.log(hightlightActions[0].dataset);
console.log();

hightlightActions[0].dataset.containing = 'giraffe';
hightlightActions[0].dataset.caseSensitive = 'true';
console.log(hightlightActions[0].dataset);
console.log();
