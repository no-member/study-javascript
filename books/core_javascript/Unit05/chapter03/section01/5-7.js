const fruits = ['apple', 'banana', 'peach'];
const $ul = document.createElement('ul');

const alertFruit = function (fruit) {
    alert('your choice is ' + fruit);
};

fruits.forEach(function (fruit) {
    const $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruit);
    $ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[1]);