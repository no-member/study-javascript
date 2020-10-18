const fruits = ['apple', 'banana', 'peach'];
const $ul = document.createElement('ul');

fruits.forEach(function (fruit) {
    const $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', function () {
        alert('you choice is ' + fruit);
    });
    $ul.appendChild($li);
});

document.body.appendChild($ul);

