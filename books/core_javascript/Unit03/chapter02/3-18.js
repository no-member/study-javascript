const a = function() {
    const argv = Array.prototype.slice.call(arguments);
    argv.forEach(function (arg) {
        console.log(arg);
    });
}
a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
const nodeList = document.querySelectorAll('div');
const nodeArr = Array.prototype.slice.call(nodeList);

nodeArr.forEach(function(node) {
    console.log(node);
});

