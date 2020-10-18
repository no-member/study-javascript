const fruits = ['apple', 'banana', 'peach'];
const $ul = document.createElement('ul');

const alertFruitBuilder = function (fruit) {
    return function () {
        alert(`you choice is ${fruit}`);
    };
};

fruits.forEach(function (fruit) {
    const $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruitBuilder(fruit));
    $ul.appendChild($li);
});

document.body.appendChild($ul);
