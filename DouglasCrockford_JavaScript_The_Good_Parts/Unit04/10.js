const myFunction = function() {
    let a = 10

    {
        let a = 20;
        console.log(a);
    }
    console.log(a);
}

myFunction();
console.log();

var myObject = function () {
    var value = 0;

    return {
        increment: function (num) {
            value += typeof num === 'number' ? num : 1;
        },
        getValue: function () {
            return value;
        }
    }
}();

var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

var myQuo = quo("amazed");

console.log(myQuo.get_status());

var fade = function(node) {
    var level =1;
    var step = function() {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

var add_the_handlers_bad = function (nodes) {
    var i;
    for (i =0; i < nodes.length; i +=1 ) {
        nodes[i].onclick = function(e) {
            alert(i);
        };
    }
};

var add_the_handlers_good = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (i) {
            return function (e) {
                alert(i);
            };
        }(i);
    }
};

