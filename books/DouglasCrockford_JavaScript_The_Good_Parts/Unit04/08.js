var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
}

hanoi(2, 'Src', 'Aux', 'Dst')
console.log('')

var walk_the_DOM = function (node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk_the_DOM(node, func);
        node = node.nextSibling;
    }
}

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
};

var factorial = function (i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
}

console.log(factorial(4))
