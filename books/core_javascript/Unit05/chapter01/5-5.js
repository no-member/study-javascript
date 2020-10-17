(function () {
    let count = 0;
    const button = document.createElement('button');

    button.innerText = 'click';
    button.addEventListener('click', function () {
        console.log(++count, 'times clicked');
    });

    document.body.appendChild(button);
})();